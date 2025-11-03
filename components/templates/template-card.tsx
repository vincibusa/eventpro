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
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')

	return (
		<Card className="group animate-fade-in overflow-hidden border-2 transition-all hover:border-primary/20 hover:shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
			<Link href={`/template/${template.id}`}>
				<div className="relative aspect-[4/3] overflow-hidden bg-muted">
					<Image
						src={template.images[0] || '/api/placeholder/800/600'}
						alt={template.name}
						fill
						className="object-cover transition-transform duration-300 group-hover:scale-105"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
					{template.popular && (
						<div className="absolute top-4 right-4">
							<Badge className="bg-primary text-primary-foreground">
								Popular
							</Badge>
						</div>
					)}
				</div>
			</Link>
			<CardContent className="p-6">
				<div className="mb-2 flex items-center justify-between">
					<Badge
						variant="secondary"
						className="text-xs"
					>
						{categoryLabel}
					</Badge>
				</div>
				<Link href={`/template/${template.id}`}>
					<h3 className="mb-2 font-poppins text-lg font-semibold transition-colors group-hover:text-primary">
						{template.name}
					</h3>
				</Link>
				<p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
					{template.description}
				</p>
				<Button
					asChild
					className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
				>
					<Link href={`/template/${template.id}`}>Customize</Link>
				</Button>
			</CardContent>
		</Card>
	)
}

