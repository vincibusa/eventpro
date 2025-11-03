'use client'

import { useState } from 'react'
import { Upload, Image as ImageIcon, Palette, Sparkles } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { CustomizationOptions } from '@/types/template'

interface SidebarProps {
	customization: CustomizationOptions
	onChange: (customization: CustomizationOptions) => void
	onGenerate: () => void
	isGenerating: boolean
}

export function ConfiguratorSidebar({
	customization,
	onChange,
	onGenerate,
	isGenerating,
}: SidebarProps) {
	const [logoPreview, setLogoPreview] = useState<string | null>(null)
	const [imagePreview, setImagePreview] = useState<string | null>(null)

	const colorOptions = [
		{ name: 'Oro', value: '#D4AF37' },
		{ name: 'Blu Reale', value: '#1E3A8A' },
		{ name: 'Cremisi', value: '#DC143C' },
		{ name: 'Verde Foresta', value: '#228B22' },
		{ name: 'Carbone', value: '#36454F' },
		{ name: 'Bianco', value: '#FFFFFF', border: true },
	]

	const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setLogoPreview(reader.result as string)
				onChange({ ...customization, logo: file })
			}
			reader.readAsDataURL(file)
		}
	}

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setImagePreview(reader.result as string)
				onChange({
					...customization,
					customImages: [...(customization.customImages || []), file],
				})
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<div className="flex h-full max-h-full flex-col overflow-hidden">
			<div className="flex-1 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
			{/* Logo Upload */}
			<Card className="border-2 shadow-xl">
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-lg">
						<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
							<Upload className="h-5 w-5" />
						</div>
						Logo
					</CardTitle>
					<CardDescription className="text-sm">
						Carica il logo della tua azienda o evento
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex items-center gap-4">
						<Input
							type="file"
							accept="image/*"
							onChange={handleLogoUpload}
							className="flex-1 cursor-pointer"
						/>
					</div>
					{logoPreview && (
						<div className="relative h-32 w-full overflow-hidden rounded-xl border-2 border-primary/20 bg-muted shadow-lg transition-all hover:border-primary/40 hover:shadow-xl">
							<img
								src={logoPreview}
								alt="Anteprima logo"
								className="h-full w-full object-contain p-2"
							/>
						</div>
					)}
				</CardContent>
			</Card>

			{/* Event Details */}
			<Card className="border-2 shadow-xl">
				<CardHeader>
					<CardTitle className="text-lg">Dettagli Evento</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="event-name" className="text-sm font-semibold">Nome Evento</Label>
						<Input
							id="event-name"
							value={customization.eventName}
							onChange={(e) =>
								onChange({ ...customization, eventName: e.target.value })
							}
							placeholder="Inserisci il nome dell'evento"
							className="transition-all focus:ring-2 focus:ring-primary"
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="event-type" className="text-sm font-semibold">Tipo di Evento</Label>
						<Select
							value={customization.eventType}
							onValueChange={(value) =>
								onChange({
									...customization,
									eventType: value as CustomizationOptions['eventType'],
								})
							}
						>
							<SelectTrigger className="transition-all focus:ring-2 focus:ring-primary">
								<SelectValue placeholder="Seleziona tipo evento" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="corporate">Corporate</SelectItem>
								<SelectItem value="wedding">Matrimoni</SelectItem>
								<SelectItem value="concert">Concerti</SelectItem>
								<SelectItem value="trade-show">Fiere</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-2">
						<Label htmlFor="description" className="text-sm font-semibold">Descrizione</Label>
						<Textarea
							id="description"
							value={customization.description}
							onChange={(e) =>
								onChange({ ...customization, description: e.target.value })
							}
							placeholder="Descrivi il tuo evento..."
							rows={4}
							className="transition-all focus:ring-2 focus:ring-primary resize-none"
						/>
					</div>
				</CardContent>
			</Card>

			{/* Color Customization */}
			<Card className="border-2 shadow-xl">
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-lg">
						<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
							<Palette className="h-5 w-5" />
						</div>
						Tema Colori
					</CardTitle>
					<CardDescription className="text-sm">
						Scegli la tua combinazione di colori principale
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid grid-cols-3 gap-3">
						{colorOptions.map((color) => (
							<button
								key={color.value}
								type="button"
								onClick={() =>
									onChange({
										...customization,
										colors: [color.value, ...customization.colors.slice(1)],
									})
								}
								className={`group relative h-20 w-full rounded-xl border-2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
									customization.colors[0] === color.value
										? 'border-primary scale-110 ring-2 ring-primary ring-offset-2 shadow-lg'
										: 'border-muted hover:border-primary/50'
								} ${color.border ? 'border-gray-300 dark:border-gray-600' : ''}`}
								style={{ backgroundColor: color.value }}
								aria-label={`Seleziona colore ${color.name}`}
								title={color.name}
							>
								{customization.colors[0] === color.value && (
									<div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white shadow-lg">
										<svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
										</svg>
									</div>
								)}
								<span className={`absolute inset-0 flex items-center justify-center text-xs font-semibold transition-opacity ${
									customization.colors[0] === color.value
										? 'opacity-100 text-white drop-shadow-lg'
										: 'opacity-0 group-hover:opacity-100 text-white drop-shadow-lg'
								}`}>
									{color.name}
								</span>
							</button>
						))}
					</div>
					
					{/* Custom Color Picker */}
					<div className="space-y-2 border-t pt-4">
						<Label htmlFor="custom-color" className="text-sm font-semibold">
							O seleziona un colore personalizzato:
						</Label>
						<div className="flex items-center gap-3">
							<input
								type="color"
								id="custom-color"
								value={customization.colors[0] || '#D4AF37'}
								onChange={(e) =>
									onChange({
										...customization,
										colors: [e.target.value, ...customization.colors.slice(1)],
									})
								}
								className="h-16 w-full cursor-pointer rounded-xl border-2 border-muted transition-all hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
								aria-label="Seleziona colore personalizzato"
							/>
						</div>
						<p className="text-xs text-muted-foreground">
							Usa il picker per scegliere qualsiasi colore
						</p>
					</div>

					<p className="text-xs text-muted-foreground">
						Colore selezionato: <span className="font-semibold">{colorOptions.find(c => c.value === customization.colors[0])?.name || `Personalizzato (${customization.colors[0] || 'Nessuno'})`}</span>
					</p>
				</CardContent>
			</Card>

			{/* Custom Images */}
			<Card className="border-2 shadow-xl">
				<CardHeader>
					<CardTitle className="flex items-center gap-2 text-lg">
						<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
							<ImageIcon className="h-5 w-5" />
						</div>
						Immagini Personalizzate
					</CardTitle>
					<CardDescription className="text-sm">
						Carica immagini aggiuntive per il tuo evento
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<Input
						type="file"
						accept="image/*"
						onChange={handleImageUpload}
						multiple
						className="cursor-pointer"
					/>
					{imagePreview && (
						<div className="relative h-40 w-full overflow-hidden rounded-xl border-2 border-primary/20 bg-muted shadow-lg transition-all hover:border-primary/40 hover:shadow-xl">
							<img
								src={imagePreview}
								alt="Anteprima immagine"
								className="h-full w-full object-cover"
							/>
						</div>
					)}
				</CardContent>
			</Card>

			{/* Generate Button - Sticky at bottom */}
			<div className="sticky bottom-0 bg-background/95 backdrop-blur-sm pt-4 pb-2 border-t border-border/50">
				<Button
					size="lg"
					className="group w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105 disabled:hover:scale-100"
					onClick={onGenerate}
					disabled={isGenerating}
				>
					{isGenerating ? (
						<>
							<Sparkles className="mr-2 h-5 w-5 animate-spin" />
							Generazione in corso...
						</>
					) : (
						<>
							<Sparkles className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
							Genera Anteprima AI
						</>
					)}
				</Button>
			</div>
			</div>
		</div>
	)
}

