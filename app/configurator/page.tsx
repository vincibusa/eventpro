'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { ConfiguratorSidebar } from '@/components/configurator/sidebar'
import { PreviewCanvas } from '@/components/configurator/preview-canvas'
import type { CustomizationOptions } from '@/types/template'
import { getTemplateById } from '@/lib/data/templates'

const defaultCustomization: CustomizationOptions = {
	colors: ['#D4AF37'],
	eventType: 'corporate',
	eventName: '',
	description: '',
}

function ConfiguratorContent() {
	const searchParams = useSearchParams()
	const templateId = searchParams.get('template')
	const [customization, setCustomization] = useState<CustomizationOptions>(
		defaultCustomization
	)
	const [isGenerating, setIsGenerating] = useState(false)
	const [previewImage, setPreviewImage] = useState<string | undefined>()

	useEffect(() => {
		if (templateId) {
			const template = getTemplateById(templateId)
			if (template) {
				setCustomization({
					...defaultCustomization,
					eventType: template.category,
					eventName: template.name,
					description: template.description,
				})
			}
		}
	}, [templateId])

	const handleGenerate = async () => {
		setIsGenerating(true)
		setPreviewImage(undefined)

		// Simulate AI preview generation
		setTimeout(() => {
			setPreviewImage('/api/placeholder/1200/800')
			setIsGenerating(false)
		}, 3000)
	}

	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1">
				<div className="container mx-auto px-4 py-8 md:px-6">
					<div className="mb-8">
						<h1 className="font-poppins text-3xl font-bold tracking-tight md:text-4xl">
							Event Configurator
						</h1>
						<p className="mt-2 text-muted-foreground">
							Customize your event design with AI-powered previews
						</p>
					</div>

					<div className="grid gap-6 lg:grid-cols-[350px_1fr]">
						{/* Sidebar */}
						<aside className="lg:sticky lg:top-20 lg:h-[calc(100vh-8rem)]">
							<ConfiguratorSidebar
								customization={customization}
								onChange={setCustomization}
								onGenerate={handleGenerate}
								isGenerating={isGenerating}
							/>
						</aside>

						{/* Preview Area */}
						<div className="lg:h-[calc(100vh-8rem)]">
							<PreviewCanvas
								customization={customization}
								isGenerating={isGenerating}
								previewImage={previewImage}
							/>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default function ConfiguratorPage() {
	return (
		<Suspense
			fallback={
				<div className="flex min-h-screen flex-col">
					<Header />
					<main className="flex flex-1 items-center justify-center">
						<div className="text-center">
							<p className="text-muted-foreground">Loading configurator...</p>
						</div>
					</main>
					<Footer />
				</div>
			}
		>
			<ConfiguratorContent />
		</Suspense>
	)
}

