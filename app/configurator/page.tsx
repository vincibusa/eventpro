'use client'

import { useState, useEffect, Suspense } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Sparkles, Settings } from 'lucide-react'
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
			setPreviewImage('https://images.unsplash.com/photo-1511578314322-5ef400e77e88?w=1200&h=800&fit=crop&q=80')
			setIsGenerating(false)
		}, 3000)
	}

	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1">
				{/* Hero Section */}
				<section className="relative h-[40vh] min-h-[350px] overflow-hidden md:h-[50vh]">
					<div className="absolute inset-0">
						<Image
							src="https://images.unsplash.com/photo-1511578314322-5ef400e77e88?w=1920&h=1080&fit=crop&q=80"
							alt="Configuratore eventi AI"
							fill
							className="object-cover"
							priority
							sizes="100vw"
							quality={75}
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
					</div>
					<div className="container relative z-10 mx-auto flex h-full flex-col justify-end px-4 pb-8 md:px-6 md:pb-12">
						<div className="mb-4 inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
							<Sparkles className="h-4 w-4 text-primary" />
							Powered by Gemini 2.5 Flash
						</div>
						<h1 className="mb-4 animate-slide-up font-poppins text-4xl font-bold tracking-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl">
							Configuratore Eventi
						</h1>
						<p className="max-w-2xl animate-slide-up text-lg text-white/90 drop-shadow-lg md:text-xl" style={{ animationDelay: '0.1s' }}>
							Personalizza il design del tuo evento con anteprime alimentate dall&apos;intelligenza artificiale
						</p>
					</div>
				</section>

				<div className="container mx-auto px-4 py-12 md:px-6 md:py-16">

					<div className="grid gap-8 lg:grid-cols-[400px_1fr]">
						{/* Sidebar */}
						<aside className="lg:sticky lg:top-24 lg:h-[calc(100vh-12rem)] lg:max-h-[calc(100vh-12rem)]">
							<ConfiguratorSidebar
								customization={customization}
								onChange={setCustomization}
								onGenerate={handleGenerate}
								isGenerating={isGenerating}
							/>
						</aside>

						{/* Preview Area */}
						<div className="lg:h-[calc(100vh-10rem)]">
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
							<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<Settings className="h-6 w-6 animate-spin text-primary" />
							</div>
							<p className="text-muted-foreground">Caricamento configuratore...</p>
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

