'use client'

import { useState } from 'react'
import { Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react'
import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

interface FormData {
	name: string
	email: string
	company?: string
	phone?: string
	message: string
	eventType?: string
	meetingDate?: Date
	meetingTime?: string
}

export default function ContactPage() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		company: '',
		phone: '',
		message: '',
		eventType: '',
		meetingDate: undefined,
		meetingTime: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

	const timeSlots = [
		'9:00 AM',
		'10:00 AM',
		'11:00 AM',
		'12:00 PM',
		'1:00 PM',
		'2:00 PM',
		'3:00 PM',
		'4:00 PM',
		'5:00 PM',
	]

	const validate = (): boolean => {
		const newErrors: Partial<Record<keyof FormData, string>> = {}

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required'
		}
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required'
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email'
		}
		if (!formData.message.trim()) {
			newErrors.message = 'Message is required'
		}

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!validate()) {
			return
		}

		setIsSubmitting(true)

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false)
			setIsSubmitted(true)
		}, 1500)
	}

	if (isSubmitted) {
		return (
			<div className="flex min-h-screen flex-col">
				<Header />
				<main className="flex flex-1 items-center justify-center px-4 py-20">
					<Card className="w-full max-w-md text-center">
						<CardContent className="pt-6">
							<div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
								<CheckCircle2 className="h-8 w-8 text-primary" />
							</div>
							<h2 className="mb-2 font-poppins text-2xl font-semibold">
								Thank You!
							</h2>
							<p className="mb-6 text-muted-foreground">
								We&apos;ve received your message and will get back to you within 24
								hours.
							</p>
							<Button
								onClick={() => {
									setIsSubmitted(false)
									setFormData({
										name: '',
										email: '',
										company: '',
										phone: '',
										message: '',
										eventType: '',
										meetingDate: undefined,
										meetingTime: '',
									})
								}}
							>
								Send Another Message
							</Button>
						</CardContent>
					</Card>
				</main>
				<Footer />
			</div>
		)
	}

	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1 px-4 py-12 md:px-6 md:py-16">
				<div className="container mx-auto max-w-4xl">
					<div className="mb-12 text-center">
						<h1 className="mb-4 font-poppins text-4xl font-bold tracking-tight md:text-5xl">
							Get In Touch
						</h1>
						<p className="mx-auto max-w-2xl text-muted-foreground">
							Ready to create your perfect event? Contact our team or schedule a
							meeting to discuss your vision.
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-1 lg:grid-cols-[1fr_400px]">
						{/* Contact Form */}
						<Card>
							<CardHeader>
								<CardTitle>Send us a Message</CardTitle>
								<CardDescription>
									Fill out the form below and we&apos;ll get back to you as soon as
									possible
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid gap-6 sm:grid-cols-2">
										<div className="space-y-2">
											<Label htmlFor="name">
												Name <span className="text-destructive">*</span>
											</Label>
											<Input
												id="name"
												value={formData.name}
												onChange={(e) =>
													setFormData({ ...formData, name: e.target.value })
												}
												placeholder="John Doe"
												aria-invalid={!!errors.name}
											/>
											{errors.name && (
												<p className="text-sm text-destructive">{errors.name}</p>
											)}
										</div>

										<div className="space-y-2">
											<Label htmlFor="email">
												Email <span className="text-destructive">*</span>
											</Label>
											<Input
												id="email"
												type="email"
												value={formData.email}
												onChange={(e) =>
													setFormData({ ...formData, email: e.target.value })
												}
												placeholder="john@example.com"
												aria-invalid={!!errors.email}
											/>
											{errors.email && (
												<p className="text-sm text-destructive">{errors.email}</p>
											)}
										</div>
									</div>

									<div className="grid gap-6 sm:grid-cols-2">
										<div className="space-y-2">
											<Label htmlFor="company">Company</Label>
											<Input
												id="company"
												value={formData.company}
												onChange={(e) =>
													setFormData({ ...formData, company: e.target.value })
												}
												placeholder="Company name"
											/>
										</div>

										<div className="space-y-2">
											<Label htmlFor="phone">Phone</Label>
											<Input
												id="phone"
												type="tel"
												value={formData.phone}
												onChange={(e) =>
													setFormData({ ...formData, phone: e.target.value })
												}
												placeholder="+1 (555) 000-0000"
											/>
										</div>
									</div>

									<div className="space-y-2">
										<Label htmlFor="event-type">Event Type</Label>
										<Select
											value={formData.eventType}
											onValueChange={(value) =>
												setFormData({ ...formData, eventType: value })
											}
										>
											<SelectTrigger>
												<SelectValue placeholder="Select event type" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="corporate">Corporate Event</SelectItem>
												<SelectItem value="wedding">Wedding</SelectItem>
												<SelectItem value="concert">Concert</SelectItem>
												<SelectItem value="trade-show">Trade Show</SelectItem>
												<SelectItem value="other">Other</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<div className="space-y-2">
										<Label htmlFor="message">
											Message <span className="text-destructive">*</span>
										</Label>
										<Textarea
											id="message"
											value={formData.message}
											onChange={(e) =>
												setFormData({ ...formData, message: e.target.value })
											}
											placeholder="Tell us about your event..."
											rows={6}
											aria-invalid={!!errors.message}
										/>
										{errors.message && (
											<p className="text-sm text-destructive">{errors.message}</p>
										)}
									</div>

									<Button
										type="submit"
										size="lg"
										className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
										disabled={isSubmitting}
									>
										{isSubmitting ? 'Sending...' : 'Send Message'}
									</Button>
								</form>
							</CardContent>
						</Card>

						{/* Meeting Booking */}
						<Card>
							<CardHeader>
								<CardTitle>Schedule a Meeting</CardTitle>
								<CardDescription>
									Book a time to discuss your event in detail
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<Label>Select Date</Label>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant="outline"
												className={cn(
													'w-full justify-start text-left font-normal',
													!formData.meetingDate && 'text-muted-foreground'
												)}
												aria-label="Select meeting date"
											>
												<CalendarIcon className="mr-2 h-4 w-4" aria-hidden="true" />
												{formData.meetingDate
													? format(formData.meetingDate, 'PPP')
													: 'Pick a date'}
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={formData.meetingDate}
												onSelect={(date: Date | undefined) =>
													setFormData({ ...formData, meetingDate: date })
												}
												disabled={(date: Date) => date < new Date()}
											/>
										</PopoverContent>
									</Popover>
								</div>

								{formData.meetingDate && (
									<div className="space-y-2">
										<Label>Select Time</Label>
										<div className="grid grid-cols-2 gap-2">
											{timeSlots.map((time) => (
												<Button
													key={time}
													type="button"
													variant={
														formData.meetingTime === time
															? 'default'
															: 'outline'
													}
													size="sm"
													onClick={() =>
														setFormData({ ...formData, meetingTime: time })
													}
													className={
														formData.meetingTime === time
															? 'bg-primary text-primary-foreground'
															: ''
													}
												>
													{time}
												</Button>
											))}
										</div>
									</div>
								)}

								{formData.meetingDate && formData.meetingTime && (
									<Button
										className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
										onClick={() => {
											// In a real app, this would integrate with a calendar service
											alert(
												`Meeting scheduled for ${format(formData.meetingDate!, 'PPP')} at ${formData.meetingTime}`
											)
										}}
									>
										<Clock className="mr-2 h-4 w-4" />
										Confirm Meeting
									</Button>
								)}
							</CardContent>
						</Card>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}

