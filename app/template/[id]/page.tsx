'use client'

import { useState } from 'react'
import { use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Sparkles, Upload, Mail, Settings, Palette, Image as ImageIcon, CheckCircle2, Zap } from 'lucide-react'
import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getTemplateById } from '@/lib/data/templates'
import { notFound } from 'next/navigation'

export default function TemplateDetailPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = use(params)
	const template = getTemplateById(id)
	const [selectedColor, setSelectedColor] = useState('#D4AF37')
	const [isGenerating, setIsGenerating] = useState(false)

	if (!template) {
		notFound()
	}

	const categoryLabel = template.category
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')

	const colorOptions = [
		{ name: 'Oro', value: '#D4AF37' },
		{ name: 'Blu Reale', value: '#1E3A8A' },
		{ name: 'Marrone', value: '#8B4513' },
		{ name: 'Bianco', value: '#FFFFFF', border: true },
		{ name: 'Nero', value: '#000000' },
		{ name: 'Cremisi', value: '#DC143C' },
	]

	// Usa immagini Unsplash per il carousel
	const carouselImages = [
		'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop&q=80',
		'https://images.unsplash.com/photo-1511578314322-5ef400e77e88?w=1200&h=800&fit=crop&q=80',
		'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&h=800&fit=crop&q=80',
	]

	const handleGeneratePreview = async () => {
		setIsGenerating(true)
		// Simulate AI preview generation
		setTimeout(() => {
			setIsGenerating(false)
			// In a real app, this would call the Gemini API
		}, 2000)
	}

	return (
		<div className="flex min-h-screen flex-col">
			<Header />
				<main className="flex-1">
					{/* Hero Image Section */}
					<section className="relative h-[60vh] min-h-[500px] overflow-hidden md:h-[70vh]">
						<div className="absolute inset-0">
							<Image
								src={carouselImages[0]}
								alt={template.name}
								fill
								className="object-cover"
								priority
								sizes="100vw"
								quality={75}
							/>
							<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
						</div>
						<div className="container relative z-10 mx-auto flex h-full flex-col justify-end px-4 pb-12 pt-20 md:px-6">
							<Button
								asChild
								variant="ghost"
								className="mb-6 text-white hover:bg-white/10 backdrop-blur-sm"
							>
								<Link href="/gallery">
									<ArrowLeft className="mr-2 h-4 w-4" />
									Torna alla Galleria
								</Link>
							</Button>
							<div className="mb-4 flex flex-wrap items-center gap-2">
								<Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-white/30">
									{categoryLabel}
								</Badge>
								{template.popular && (
									<Badge className="bg-primary text-primary-foreground">
										Popolare
									</Badge>
								)}
							</div>
							<h1 className="mb-4 font-poppins text-4xl font-bold tracking-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl">
								{template.name}
							</h1>
							<p className="max-w-2xl text-lg text-white/90 drop-shadow-lg md:text-xl">
								{template.description}
							</p>
						</div>
					</section>

					<div className="container mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
						<div className="grid gap-12 lg:grid-cols-2">
						{/* Image Carousel */}
						<div className="space-y-4">
							<Carousel className="w-full">
								<CarouselContent>
									{carouselImages.map((image, index) => (
										<CarouselItem key={index}>
											<div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
												<Image
													src={image}
													alt={`${template.name} - Immagine ${index + 1}`}
													fill
													className="object-cover"
													sizes="(max-width: 1024px) 100vw, 50vw"
													quality={75}
												/>
											</div>
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious className="left-4 border-2 bg-white/90 backdrop-blur-sm hover:bg-white" />
								<CarouselNext className="right-4 border-2 bg-white/90 backdrop-blur-sm hover:bg-white" />
							</Carousel>
							{/* Thumbnails */}
							<div className="flex gap-3 overflow-x-auto pb-2">
								{carouselImages.map((image, index) => (
									<button
										key={index}
										className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border-2 border-transparent bg-muted transition-all hover:border-primary hover:scale-105 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
										aria-label={`Visualizza immagine ${index + 1}`}
									>
										<Image
											src={image}
											alt={`${template.name} thumbnail ${index + 1}`}
											fill
											className="object-cover"
											sizes="96px"
										/>
									</button>
								))}
							</div>
						</div>

						{/* Content Section */}
						<div className="space-y-8">

							{/* Features List */}
							<Card className="border-2 shadow-xl">
								<CardHeader>
									<div className="mb-2 flex items-center gap-2">
										<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
											<Zap className="h-5 w-5" />
										</div>
										<CardTitle className="text-2xl">Caratteristiche Principali</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<ul className="space-y-4">
										{template.features.map((feature, index) => (
											<li key={index} className="flex items-start gap-3 group">
												<div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
													<CheckCircle2 className="h-4 w-4" />
												</div>
												<span className="text-base leading-relaxed text-foreground">{feature}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>

							{/* Customization Preview */}
							<Card className="border-2 shadow-xl">
								<CardHeader>
									<div className="mb-2 flex items-center gap-2">
										<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
											<Palette className="h-5 w-5" />
										</div>
										<CardTitle className="text-2xl">Personalizza</CardTitle>
									</div>
									<CardDescription className="text-base">
										Anteprima di come apparirà il tuo evento con colori e branding personalizzati
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-6">
									<div className="space-y-3">
										<Label htmlFor="color-picker" className="text-base font-semibold">
											Tema Colori
										</Label>
										<div className="flex flex-wrap gap-3">
											{colorOptions.map((color) => (
												<button
													key={color.value}
													type="button"
													onClick={() => setSelectedColor(color.value)}
													className={`group relative h-12 w-12 rounded-full border-2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
														selectedColor === color.value
															? 'border-primary scale-110 ring-2 ring-primary ring-offset-2'
															: 'border-muted hover:border-primary/50'
													} ${color.border ? 'border-gray-300 dark:border-gray-600' : ''}`}
													style={{ backgroundColor: color.value }}
													aria-label={`Seleziona colore ${color.name}`}
													title={color.name}
												>
													{selectedColor === color.value && (
														<div className="absolute inset-0 flex items-center justify-center">
															<CheckCircle2 className="h-6 w-6 text-white drop-shadow-lg" />
														</div>
													)}
												</button>
											))}
										</div>
										<p className="text-sm text-muted-foreground">
											Colore selezionato: <span className="font-semibold">{colorOptions.find(c => c.value === selectedColor)?.name}</span>
										</p>
									</div>

									<div className="space-y-3">
										<Label htmlFor="logo-upload" className="text-base font-semibold flex items-center gap-2">
											<ImageIcon className="h-4 w-4" />
											Carica Logo
										</Label>
										<div className="flex items-center gap-4">
											<Input
												id="logo-upload"
												type="file"
												accept="image/*"
												className="flex-1 cursor-pointer"
											/>
											<Button variant="outline" size="icon" asChild className="hover:bg-primary hover:text-primary-foreground transition-colors">
												<label htmlFor="logo-upload" className="cursor-pointer">
													<Upload className="h-4 w-4" />
													<span className="sr-only">Carica logo</span>
												</label>
											</Button>
										</div>
										<p className="text-sm text-muted-foreground">
											Carica il logo della tua azienda o evento per personalizzare il template
										</p>
									</div>
								</CardContent>
							</Card>

							{/* Action Buttons */}
							<div className="flex flex-col gap-4 sm:flex-row">
								<Button
									size="lg"
									className="group flex-1 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105"
									onClick={handleGeneratePreview}
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
								<Button
									size="lg"
									variant="secondary"
									className="group flex-1 hover:shadow-xl transition-all hover:scale-105"
									asChild
								>
									<Link href="/contact">
										<Mail className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
										Contatta il Team
									</Link>
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="group flex-1 border-2 hover:shadow-lg transition-all hover:scale-105"
									asChild
								>
									<Link href={`/configurator?template=${template.id}`}>
										<Settings className="mr-2 h-5 w-5 transition-transform group-hover:rotate-90" />
										Apri Configuratore
									</Link>
								</Button>
							</div>
						</div>
						</div>
					</div>
				</main>
			<Footer />
		</div>
	)
}

