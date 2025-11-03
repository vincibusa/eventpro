'use client'

import { useState } from 'react'
import { Upload, Image as ImageIcon, Palette } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { CustomizationOptions } from '@/types/template'

interface SidebarProps {
	customization: CustomizationOptions
	onChange: (customization: CustomizationOptions) => void
	onGenerate: () => void
	isGenerating: boolean
}

export function ConfiguratorSidebar({
	customization,
	onChange,
	onGenerate,
	isGenerating,
}: SidebarProps) {
	const [logoPreview, setLogoPreview] = useState<string | null>(null)
	const [imagePreview, setImagePreview] = useState<string | null>(null)

	const colorOptions = [
		{ name: 'Gold', value: '#D4AF37' },
		{ name: 'Royal Blue', value: '#1E3A8A' },
		{ name: 'Crimson', value: '#DC143C' },
		{ name: 'Forest Green', value: '#228B22' },
		{ name: 'Charcoal', value: '#36454F' },
		{ name: 'White', value: '#FFFFFF' },
	]

	const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setLogoPreview(reader.result as string)
				onChange({ ...customization, logo: file })
			}
			reader.readAsDataURL(file)
		}
	}

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setImagePreview(reader.result as string)
				onChange({
					...customization,
					customImages: [...(customization.customImages || []), file],
				})
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<div className="space-y-6 overflow-y-auto pb-6">
			{/* Logo Upload */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Upload className="h-5 w-5" />
						Logo
					</CardTitle>
					<CardDescription>
						Upload your company or event logo
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="flex items-center gap-4">
						<Input
							type="file"
							accept="image/*"
							onChange={handleLogoUpload}
							className="flex-1"
						/>
					</div>
					{logoPreview && (
						<div className="relative h-24 w-full overflow-hidden rounded-md border bg-muted">
							<img
								src={logoPreview}
								alt="Logo preview"
								className="h-full w-full object-contain"
							/>
						</div>
					)}
				</CardContent>
			</Card>

			{/* Event Details */}
			<Card>
				<CardHeader>
					<CardTitle>Event Details</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="event-name">Event Name</Label>
						<Input
							id="event-name"
							value={customization.eventName}
							onChange={(e) =>
								onChange({ ...customization, eventName: e.target.value })
							}
							placeholder="Enter event name"
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="event-type">Event Type</Label>
						<Select
							value={customization.eventType}
							onValueChange={(value) =>
								onChange({
									...customization,
									eventType: value as CustomizationOptions['eventType'],
								})
							}
						>
							<SelectTrigger>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="corporate">Corporate</SelectItem>
								<SelectItem value="wedding">Wedding</SelectItem>
								<SelectItem value="concert">Concert</SelectItem>
								<SelectItem value="trade-show">Trade Show</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-2">
						<Label htmlFor="description">Description</Label>
						<Textarea
							id="description"
							value={customization.description}
							onChange={(e) =>
								onChange({ ...customization, description: e.target.value })
							}
							placeholder="Describe your event..."
							rows={4}
						/>
					</div>
				</CardContent>
			</Card>

			{/* Color Customization */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Palette className="h-5 w-5" />
						Color Theme
					</CardTitle>
					<CardDescription>
						Choose your primary color scheme
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-3 gap-3">
						{colorOptions.map((color) => (
							<button
								key={color.value}
								type="button"
								onClick={() =>
									onChange({
										...customization,
										colors: [color.value, ...customization.colors.slice(1)],
									})
								}
								className={`group relative h-16 w-full rounded-lg border-2 transition-all ${
									customization.colors[0] === color.value
										? 'border-primary scale-105'
										: 'border-muted hover:scale-105'
								}`}
								style={{ backgroundColor: color.value }}
								aria-label={`Select ${color.name} color`}
							>
								<span className="absolute inset-0 flex items-center justify-center text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
									{color.name}
								</span>
							</button>
						))}
					</div>
				</CardContent>
			</Card>

			{/* Custom Images */}
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<ImageIcon className="h-5 w-5" />
						Custom Images
					</CardTitle>
					<CardDescription>
						Upload additional images for your event
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<Input
						type="file"
						accept="image/*"
						onChange={handleImageUpload}
						multiple
					/>
					{imagePreview && (
						<div className="relative h-32 w-full overflow-hidden rounded-md border bg-muted">
							<img
								src={imagePreview}
								alt="Image preview"
								className="h-full w-full object-cover"
							/>
						</div>
					)}
				</CardContent>
			</Card>

			{/* Generate Button */}
			<Button
				size="lg"
				className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
				onClick={onGenerate}
				disabled={isGenerating}
			>
				{isGenerating ? 'Generating Preview...' : 'Generate AI Preview'}
			</Button>
		</div>
	)
}

