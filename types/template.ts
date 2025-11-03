export type EventCategory = 'corporate' | 'wedding' | 'concert' | 'trade-show'

export interface Template {
	id: string
	name: string
	category: EventCategory
	description: string
	images: string[]
	features: string[]
	price?: number
	popular?: boolean
}

export interface CustomizationOptions {
	colors: string[]
	logo?: File | string
	eventType: EventCategory
	eventName: string
	description: string
	customImages?: File[]
}

export interface TemplatePreview {
	templateId: string
	customization: CustomizationOptions
	previewImage?: string
}

