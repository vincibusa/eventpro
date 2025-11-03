'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, Filter, Sparkles } from 'lucide-react'
import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { TemplateCard } from '@/components/templates/template-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { templates, getTemplatesByCategory } from '@/lib/data/templates'
import type { EventCategory } from '@/types/template'

export default function GalleryPage() {
	const [selectedCategory, setSelectedCategory] = useState<string>('all')
	const [searchQuery, setSearchQuery] = useState('')

	const categories: Array<{ value: string; label: string }> = [
		{ value: 'all', label: 'Tutti' },
		{ value: 'corporate', label: 'Corporate' },
		{ value: 'wedding', label: 'Matrimoni' },
		{ value: 'concert', label: 'Concerti' },
		{ value: 'trade-show', label: 'Fiere' },
	]

	const filteredTemplates = getTemplatesByCategory(selectedCategory).filter(
		(template) => {
			if (!searchQuery) return true
			const query = searchQuery.toLowerCase()
			return (
				template.name.toLowerCase().includes(query) ||
				template.description.toLowerCase().includes(query) ||
				template.category.toLowerCase().includes(query)
			)
		}
	)

	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1">
				{/* Hero Section */}
				<section className="relative h-[50vh] min-h-[400px] overflow-hidden md:h-[60vh]">
					<div className="absolute inset-0">
						<Image
							src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1080&fit=crop&q=80"
							alt="Galleria template eventi"
							fill
							className="object-cover"
							priority
							sizes="100vw"
							quality={75}
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
					</div>
					<div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 text-center md:px-6">

						<h1 className="mb-6 animate-slide-up font-poppins text-4xl font-bold tracking-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl">
							Galleria Template
						</h1>
						<p className="mx-auto max-w-2xl animate-slide-up text-lg text-white/90 drop-shadow-lg md:text-xl" style={{ animationDelay: '0.1s' }}>
							Esplora la nostra collezione curata di template di eventi di lusso.
							Ogni template è completamente personalizzabile con anteprime AI.
						</p>
					</div>
				</section>

				<div className="container mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">

					{/* Filter Bar */}
					<div className="mb-12 space-y-6">
						<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
							<div className="flex items-center gap-2">
								<Filter className="h-5 w-5 text-muted-foreground" />
								<span className="text-sm font-semibold text-foreground">Filtra per categoria:</span>
							</div>
							<div className="relative flex-1 max-w-xs">
								<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
								<Input
									type="search"
									placeholder="Cerca template..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="pl-10"
								/>
							</div>
						</div>
						<div className="flex flex-wrap gap-3">
							{categories.map((category) => (
								<Button
									key={category.value}
									variant={
										selectedCategory === category.value
											? 'default'
											: 'outline'
									}
									size="sm"
									onClick={() => setSelectedCategory(category.value)}
									className={`transition-all duration-300 ${
										selectedCategory === category.value
											? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105'
											: 'hover:border-primary hover:scale-105'
									}`}
								>
									{category.label}
								</Button>
							))}
						</div>
					</div>

					{/* Template Grid */}
					{filteredTemplates.length > 0 ? (
						<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
							{filteredTemplates.map((template, index) => (
								<TemplateCard
									key={template.id}
									template={template}
									index={index}
								/>
							))}
						</div>
					) : (
						<div className="py-20 text-center">
							<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted">
								<Search className="h-8 w-8 text-muted-foreground" />
							</div>
							<h3 className="mb-2 font-poppins text-2xl font-semibold">Nessun template trovato</h3>
							<p className="text-muted-foreground">
								Prova ad aggiustare i filtri o la ricerca.
							</p>
							<Button
								variant="outline"
								className="mt-6"
								onClick={() => {
									setSelectedCategory('all')
									setSearchQuery('')
								}}
							>
								Reset Filtri
							</Button>
						</div>
					)}
				</div>
			</main>
			<Footer />
		</div>
	)
}

