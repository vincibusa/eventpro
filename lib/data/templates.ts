import type { Template } from '@/types/template'

export const templates: Template[] = [
	{
		id: 'corporate-elegance',
		name: 'Corporate Elegance',
		category: 'corporate',
		description: 'A sophisticated corporate event template featuring clean lines, professional aesthetics, and premium branding opportunities.',
		images: [
			'/api/placeholder/800/600',
			'/api/placeholder/800/600',
			'/api/placeholder/800/600',
		],
		features: [
			'Premium stage design',
			'LED backdrop integration',
			'Networking areas',
			'Brand customization',
			'Professional lighting setup',
		],
		popular: true,
	},
	{
		id: 'wedding-opulence',
		name: 'Wedding Opulence',
		category: 'wedding',
		description: 'An enchanting wedding template with romantic floral arrangements, elegant table settings, and dreamy ambiance.',
		images: [
			'/api/placeholder/800/600',
			'/api/placeholder/800/600',
			'/api/placeholder/800/600',
		],
		features: [
			'Floral centerpieces',
			'Elegant table settings',
			'Romantic lighting',
			'Photo booth area',
			'Custom monogramming',
		],
		popular: true,
	},
	{
		id: 'concert-energy',
		name: 'Concert Energy',
		category: 'concert',
		description: 'A high-energy concert template with dynamic stage design, immersive lighting, and audience engagement zones.',
		images: [
			'/api/placeholder/800/600',
			'/api/placeholder/800/600',
			'/api/placeholder/800/600',
		],
		features: [
			'Dynamic stage setup',
			'LED video walls',
			'VIP lounge area',
			'Merchandise zones',
			'Sound system integration',
		],
		popular: false,
	},
	{
		id: 'trade-show-impact',
		name: 'Trade Show Impact',
		category: 'trade-show',
		description: 'A powerful trade show template designed to maximize brand visibility with modular booths and interactive displays.',
		images: [
			'/api/placeholder/800/600',
			'/api/placeholder/800/600',
			'/api/placeholder/800/600',
		],
		features: [
			'Modular booth design',
			'Interactive touch screens',
			'Product display areas',
			'Meeting spaces',
			'Brand signage',
		],
		popular: false,
	},
	{
		id: 'corporate-innovation',
		name: 'Corporate Innovation',
		category: 'corporate',
		description: 'A modern corporate event template featuring tech-forward design, flexible spaces, and innovation-focused layouts.',
		images: [
			'/api/placeholder/800/600',
			'/api/placeholder/800/600',
			'/api/placeholder/800/600',
		],
		features: [
			'Tech-integrated spaces',
			'Flexible seating arrangements',
			'Digital signage',
			'Collaboration zones',
			'Streaming capabilities',
		],
		popular: false,
	},
	{
		id: 'wedding-garden',
		name: 'Garden Romance',
		category: 'wedding',
		description: 'A charming garden wedding template with natural beauty, outdoor elegance, and intimate atmosphere.',
		images: [
			'/api/placeholder/800/600',
			'/api/placeholder/800/600',
			'/api/placeholder/800/600',
		],
		features: [
			'Garden-style decor',
			'Outdoor ceremony setup',
			'Natural lighting',
			'Reception tent design',
			'Floral arches',
		],
		popular: false,
	},
]

export function getTemplateById(id: string): Template | undefined {
	return templates.find((template) => template.id === id)
}

export function getTemplatesByCategory(category: string): Template[] {
	if (!category || category === 'all') {
		return templates
	}
	return templates.filter((template) => template.category === category)
}

