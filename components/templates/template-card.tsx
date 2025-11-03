'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Template } from '@/types/template'
import { eventCategoryColors } from '@/lib/constants/colors'

// Mappa immagini Unsplash per categoria
const categoryImages: Record<string, string[]> = {
	corporate: [
		'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=80',
		'https://images.unsplash.com/photo-1511578314322-5ef400e77e88?w=800&h=600&fit=crop&q=80',
		'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop&q=80',
	],
	wedding: [
		'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop&q=80',
		'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop&q=80',
		'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop&q=80',
	],
	concert: [
		'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop&q=80',
		'https://images.unsplash.com/photo-1511578314322-5ef400e77e88?w=800&h=600&fit=crop&q=80',
		'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=80',
	],
	'trade-show': [
		'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=80',
		'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop&q=80',
		'https://images.unsplash.com/photo-1511578314322-5ef400e77e88?w=800&h=600&fit=crop&q=80',
	],
}

function getTemplateImage(template: Template): string {
	const images = categoryImages[template.category]
	if (images && images.length > 0) {
		// Usa l'hash dell'ID per selezionare un'immagine consistente
		const hash = template.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
		return images[hash % images.length]
	}
	return 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=80'
}

interface TemplateCardProps {
	template: Template
	index?: number
}

export function TemplateCard({ template, index = 0 }: TemplateCardProps) {
	const categoryLabel = template.category
		.split('-')
		.map((word) => {
			const labelMap: Record<string, string> = {
				corporate: 'Corporate',
				wedding: 'Matrimoni',
				concert: 'Concerti',
				trade: 'Fiere',
				show: '',
			}
			return labelMap[word.toLowerCase()] || word.charAt(0).toUpperCase() + word.slice(1)
		})
		.filter(Boolean)
		.join(' ')

	const templateImage = getTemplateImage(template)

	return (
		<Link href={`/template/${template.id}`} className="group block">
			<Card className="relative h-[400px] overflow-hidden border-0 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 md:h-[450px]" style={{ animationDelay: `${index * 0.05}s` }}>
				{/* Background Image */}
				<div className="absolute inset-0">
					<Image
						src={templateImage}
						alt={template.name}
						fill
						className="object-cover transition-transform duration-700 group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
						quality={85}
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90" />
					<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
				</div>

				{/* Content Overlay */}
				<CardContent className="relative flex h-full flex-col justify-end p-6 text-white md:p-8">
					{/* Top Badge */}
					<div className="mb-auto">
						{template.popular && (
							<Badge className="bg-primary text-primary-foreground shadow-lg backdrop-blur-sm border-0 mb-2">
								<Sparkles className="mr-1 h-3 w-3" />
								Popolare
							</Badge>
						)}
						<Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-white/30">
							{categoryLabel}
						</Badge>
					</div>

					{/* Title and Description */}
					<div className="mb-4">
						<h3 className="mb-3 font-poppins text-2xl font-bold leading-tight drop-shadow-lg md:text-3xl">
							{template.name}
						</h3>
						<p className="line-clamp-2 text-sm leading-relaxed text-white/90 drop-shadow-md md:text-base">
							{template.description}
						</p>
					</div>

					{/* CTA */}
					<div className="flex items-center gap-2 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-x-2">
						<span>Personalizza</span>
						<ArrowRight className="h-5 w-5" />
					</div>
				</CardContent>
			</Card>
		</Link>
	)
}

