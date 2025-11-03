export const brandColors = {
	gold: {
		main: 'oklch(0.7 0.15 85)',
		light: 'oklch(0.85 0.12 85)',
		dark: 'oklch(0.6 0.15 85)',
	},
	royalBlue: {
		main: 'oklch(0.45 0.12 250)',
		light: 'oklch(0.6 0.12 250)',
		dark: 'oklch(0.3 0.12 250)',
	},
} as const

export const eventCategoryColors: Record<string, string> = {
	corporate: brandColors.royalBlue.main,
	wedding: brandColors.gold.main,
	concert: brandColors.royalBlue.light,
	'trade-show': brandColors.royalBlue.dark,
}

