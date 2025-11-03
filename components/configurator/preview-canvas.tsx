'use client'

import Image from 'next/image'
import { Sparkles, Download, Share2, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import type { CustomizationOptions } from '@/types/template'

interface PreviewCanvasProps {
	customization: CustomizationOptions
	isGenerating: boolean
	previewImage?: string
}

export function PreviewCanvas({
	customization,
	isGenerating,
	previewImage,
}: PreviewCanvasProps) {
	const colorOptions = [
		{ name: 'Oro', value: '#D4AF37' },
		{ name: 'Blu Reale', value: '#1E3A8A' },
		{ name: 'Cremisi', value: '#DC143C' },
		{ name: 'Verde Foresta', value: '#228B22' },
		{ name: 'Carbone', value: '#36454F' },
		{ name: 'Bianco', value: '#FFFFFF' },
	]

	const selectedColorName = colorOptions.find(c => c.value === customization.colors[0])?.name || 'Nessuno'

	return (
		<div className="flex h-full flex-col">
			{/* Preview Header */}
			<div className="mb-6 flex items-center justify-between rounded-xl border-2 bg-card p-4 shadow-sm">
				<div>
					<h2 className="mb-1 font-poppins text-2xl font-bold">Anteprima AI</h2>
					<p className="flex items-center gap-2 text-sm text-muted-foreground">
						<Sparkles className="h-4 w-4 text-primary" />
						Powered by Gemini 2.5 Flash
					</p>
				</div>
				<div className="flex gap-2">
					<Button variant="outline" size="sm" className="group hover:border-primary hover:bg-primary/10">
						<Share2 className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
						Condividi
					</Button>
					<Button variant="outline" size="sm" className="group hover:border-primary hover:bg-primary/10">
						<Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
						Scarica
					</Button>
				</div>
			</div>

			{/* Preview Area */}
			<Card className="flex-1 overflow-hidden border-2 shadow-xl">
				<CardContent className="flex h-full items-center justify-center p-8">
					{isGenerating ? (
						<div className="w-full space-y-6">
							<div className="flex flex-col items-center justify-center gap-4">
								<div className="relative">
									<div className="h-20 w-20 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
									<Sparkles className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-pulse text-primary" />
								</div>
								<div className="text-center">
									<h3 className="mb-2 font-poppins text-xl font-semibold text-foreground">
										Generazione in corso...
									</h3>
									<p className="text-sm text-muted-foreground">
										L&apos;AI sta creando la tua anteprima personalizzata
									</p>
								</div>
							</div>
							<div className="space-y-3">
								<Skeleton className="h-64 w-full rounded-xl" />
								<Skeleton className="h-4 w-3/4" />
								<Skeleton className="h-4 w-1/2" />
							</div>
						</div>
					) : previewImage ? (
						<div className="relative h-full w-full overflow-hidden rounded-xl bg-muted shadow-2xl transition-all hover:shadow-primary/20">
							<Image
								src={previewImage}
								alt="Anteprima generata dall'AI"
								fill
								className="object-contain"
								sizes="(max-width: 1024px) 100vw, 70vw"
								quality={75}
							/>
							<div className="absolute top-4 right-4">
								<Badge className="bg-primary text-primary-foreground shadow-lg">
									<CheckCircle2 className="mr-1 h-3 w-3" />
									Anteprima Generata
								</Badge>
							</div>
						</div>
					) : (
						<div className="w-full max-w-2xl text-center">
							<div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
								<Sparkles className="h-10 w-10 text-primary" />
							</div>
							<h3 className="mb-3 font-poppins text-2xl font-semibold">
								Pronto per Generare
							</h3>
							<p className="mb-8 text-muted-foreground">
								Configura le tue impostazioni e clicca &quot;Genera Anteprima AI&quot; per
								vedere il design del tuo evento
							</p>
							<div className="rounded-xl border-2 bg-card p-6 text-left shadow-lg">
								<p className="mb-4 flex items-center gap-2 text-sm font-semibold text-foreground">
									<CheckCircle2 className="h-4 w-4 text-primary" />
									Impostazioni Correnti:
								</p>
								<ul className="space-y-3 text-sm">
									<li className="flex items-center justify-between border-b pb-2">
										<span className="text-muted-foreground">Evento:</span>
										<span className="font-semibold">{customization.eventName || 'Non impostato'}</span>
									</li>
									<li className="flex items-center justify-between border-b pb-2">
										<span className="text-muted-foreground">Tipo:</span>
										<Badge variant="secondary" className="font-semibold">
											{customization.eventType || 'Non impostato'}
										</Badge>
									</li>
									<li className="flex items-center justify-between border-b pb-2">
										<span className="text-muted-foreground">Colore:</span>
										<div className="flex items-center gap-2">
											<div
												className="h-4 w-4 rounded-full border border-primary/30"
												style={{ backgroundColor: customization.colors[0] || '#D4AF37' }}
											/>
											<span className="font-semibold">{selectedColorName}</span>
										</div>
									</li>
									<li className="flex items-center justify-between">
										<span className="text-muted-foreground">Logo:</span>
										<Badge variant={customization.logo ? 'default' : 'secondary'} className="font-semibold">
											{customization.logo ? 'Caricato' : 'Non caricato'}
										</Badge>
									</li>
								</ul>
							</div>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	)
}

