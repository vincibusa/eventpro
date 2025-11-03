'use client'

import { Sparkles, Download, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
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
	return (
		<div className="flex h-full flex-col">
			{/* Preview Header */}
			<div className="mb-4 flex items-center justify-between border-b pb-4">
				<div>
					<h2 className="font-poppins text-2xl font-semibold">AI Preview</h2>
					<p className="text-sm text-muted-foreground">
						Powered by Gemini 2.5 Flash
					</p>
				</div>
				<div className="flex gap-2">
					<Button variant="outline" size="sm">
						<Share2 className="mr-2 h-4 w-4" />
						Share
					</Button>
					<Button variant="outline" size="sm">
						<Download className="mr-2 h-4 w-4" />
						Download
					</Button>
				</div>
			</div>

			{/* Preview Area */}
			<Card className="flex-1 overflow-hidden">
				<CardContent className="flex h-full items-center justify-center p-8">
					{isGenerating ? (
						<div className="w-full space-y-4">
							<div className="flex items-center justify-center gap-2 text-primary">
								<Sparkles className="h-6 w-6 animate-spin" />
								<span className="font-medium">Generating AI preview...</span>
							</div>
							<div className="space-y-2">
								<Skeleton className="h-64 w-full rounded-lg" />
								<Skeleton className="h-4 w-3/4" />
								<Skeleton className="h-4 w-1/2" />
							</div>
						</div>
					) : previewImage ? (
						<div className="relative h-full w-full overflow-hidden rounded-lg bg-muted">
							<img
								src={previewImage}
								alt="AI generated preview"
								className="h-full w-full object-contain"
							/>
						</div>
					) : (
						<div className="text-center">
							<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
								<Sparkles className="h-8 w-8 text-primary" />
							</div>
							<h3 className="mb-2 font-poppins text-xl font-semibold">
								Ready to Generate
							</h3>
							<p className="text-muted-foreground">
								Configure your settings and click &quot;Generate AI Preview&quot; to
								see your event design
							</p>
							<div className="mt-6 rounded-lg border bg-card p-6 text-left">
								<p className="mb-2 text-sm font-medium">Current Settings:</p>
								<ul className="space-y-1 text-sm text-muted-foreground">
									<li>Event: {customization.eventName || 'Not set'}</li>
									<li>Type: {customization.eventType || 'Not set'}</li>
									<li>Color: {customization.colors[0] || 'Not set'}</li>
									<li>Logo: {customization.logo ? 'Uploaded' : 'Not uploaded'}</li>
								</ul>
							</div>
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	)
}

