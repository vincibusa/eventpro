'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Calendar as CalendarIcon, Clock, CheckCircle2, Mail, Send, Sparkles } from 'lucide-react'
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
		'09:00',
		'10:00',
		'11:00',
		'12:00',
		'13:00',
		'14:00',
		'15:00',
		'16:00',
		'17:00',
	]

	const validate = (): boolean => {
		const newErrors: Partial<Record<keyof FormData, string>> = {}

		if (!formData.name.trim()) {
			newErrors.name = 'Il nome è obbligatorio'
		}
		if (!formData.email.trim()) {
			newErrors.email = 'L\'email è obbligatoria'
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Inserisci un\'email valida'
		}
		if (!formData.message.trim()) {
			newErrors.message = 'Il messaggio è obbligatorio'
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
					<Card className="w-full max-w-md border-2 shadow-xl text-center">
						<CardContent className="pt-6">
							<div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
								<CheckCircle2 className="h-10 w-10 text-primary" />
							</div>
							<h2 className="mb-2 font-poppins text-2xl font-bold">
								Grazie!
							</h2>
							<p className="mb-6 text-muted-foreground">
								Abbiamo ricevuto il tuo messaggio e ti risponderemo entro 24
								ore.
							</p>
							<Button
								className="group hover:scale-105 transition-all hover:shadow-lg"
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
								Invia un Altro Messaggio
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
			<main className="flex-1">
				{/* Hero Section */}
				<section className="relative h-[40vh] min-h-[350px] overflow-hidden md:h-[50vh]">
					<div className="absolute inset-0">
						<Image
							src="https://images.unsplash.com/photo-1556761175-b413da4b247f?w=1920&h=1080&fit=crop&q=80"
							alt="Contatti EventPro"
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
							<Mail className="h-4 w-4 text-primary" />
							Siamo qui per aiutarti
						</div>
						<h1 className="mb-4 animate-slide-up font-poppins text-4xl font-bold tracking-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl">
							Contattaci
						</h1>
						<p className="max-w-2xl animate-slide-up text-lg text-white/90 drop-shadow-lg md:text-xl" style={{ animationDelay: '0.1s' }}>
							Pronto a creare il tuo evento perfetto? Contatta il nostro team o prenota un incontro per discutere la tua visione.
						</p>
					</div>
				</section>

				<div className="container mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">

					<div className="grid gap-8 md:grid-cols-1 lg:grid-cols-[1fr_400px]">
						{/* Contact Form */}
						<Card className="border-2 shadow-xl">
							<CardHeader>
								<div className="mb-2 flex items-center gap-2">
									<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
										<Send className="h-5 w-5" />
									</div>
									<CardTitle className="text-2xl">Invia un Messaggio</CardTitle>
								</div>
								<CardDescription className="text-base">
									Compila il modulo qui sotto e ti risponderemo il prima possibile
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid gap-6 sm:grid-cols-2">
										<div className="space-y-2">
											<Label htmlFor="name" className="text-sm font-semibold">
												Nome <span className="text-destructive">*</span>
											</Label>
											<Input
												id="name"
												value={formData.name}
												onChange={(e) =>
													setFormData({ ...formData, name: e.target.value })
												}
												placeholder="Mario Rossi"
												aria-invalid={!!errors.name}
												className="transition-all focus:ring-2 focus:ring-primary"
											/>
											{errors.name && (
												<p className="text-sm text-destructive">{errors.name}</p>
											)}
										</div>

										<div className="space-y-2">
											<Label htmlFor="email" className="text-sm font-semibold">
												Email <span className="text-destructive">*</span>
											</Label>
											<Input
												id="email"
												type="email"
												value={formData.email}
												onChange={(e) =>
													setFormData({ ...formData, email: e.target.value })
												}
												placeholder="mario@example.com"
												aria-invalid={!!errors.email}
												className="transition-all focus:ring-2 focus:ring-primary"
											/>
											{errors.email && (
												<p className="text-sm text-destructive">{errors.email}</p>
											)}
										</div>
									</div>

									<div className="grid gap-6 sm:grid-cols-2">
										<div className="space-y-2">
											<Label htmlFor="company" className="text-sm font-semibold">Azienda</Label>
											<Input
												id="company"
												value={formData.company}
												onChange={(e) =>
													setFormData({ ...formData, company: e.target.value })
												}
												placeholder="Nome azienda"
												className="transition-all focus:ring-2 focus:ring-primary"
											/>
										</div>

										<div className="space-y-2">
											<Label htmlFor="phone" className="text-sm font-semibold">Telefono</Label>
											<Input
												id="phone"
												type="tel"
												value={formData.phone}
												onChange={(e) =>
													setFormData({ ...formData, phone: e.target.value })
												}
												placeholder="+39 02 1234 5678"
												className="transition-all focus:ring-2 focus:ring-primary"
											/>
										</div>
									</div>

									<div className="space-y-2">
										<Label htmlFor="event-type" className="text-sm font-semibold">Tipo di Evento</Label>
										<Select
											value={formData.eventType}
											onValueChange={(value) =>
												setFormData({ ...formData, eventType: value })
											}
										>
											<SelectTrigger className="transition-all focus:ring-2 focus:ring-primary">
												<SelectValue placeholder="Seleziona tipo evento" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="corporate">Evento Corporate</SelectItem>
												<SelectItem value="wedding">Matrimonio</SelectItem>
												<SelectItem value="concert">Concerto</SelectItem>
												<SelectItem value="trade-show">Fiera</SelectItem>
												<SelectItem value="other">Altro</SelectItem>
											</SelectContent>
										</Select>
									</div>

									<div className="space-y-2">
										<Label htmlFor="message" className="text-sm font-semibold">
											Messaggio <span className="text-destructive">*</span>
										</Label>
										<Textarea
											id="message"
											value={formData.message}
											onChange={(e) =>
												setFormData({ ...formData, message: e.target.value })
											}
											placeholder="Raccontaci del tuo evento..."
											rows={6}
											aria-invalid={!!errors.message}
											className="transition-all focus:ring-2 focus:ring-primary resize-none"
										/>
										{errors.message && (
											<p className="text-sm text-destructive">{errors.message}</p>
										)}
									</div>

									<Button
										type="submit"
										size="lg"
										className="group w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105 disabled:hover:scale-100"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											<>
												<Send className="mr-2 h-5 w-5 animate-pulse" />
												Invio in corso...
											</>
										) : (
											<>
												<Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
												Invia Messaggio
											</>
										)}
									</Button>
								</form>
							</CardContent>
						</Card>

						{/* Meeting Booking */}
						<Card className="border-2 shadow-xl">
							<CardHeader>
								<div className="mb-2 flex items-center gap-2">
									<div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
										<CalendarIcon className="h-5 w-5" />
									</div>
									<CardTitle className="text-2xl">Prenota un Incontro</CardTitle>
								</div>
								<CardDescription className="text-base">
									Prenota un orario per discutere il tuo evento nei dettagli
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<Label className="text-sm font-semibold">Seleziona Data</Label>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant="outline"
												className={cn(
													'w-full justify-start text-left font-normal transition-all hover:border-primary hover:bg-primary/5',
													!formData.meetingDate && 'text-muted-foreground'
												)}
												aria-label="Seleziona data incontro"
											>
												<CalendarIcon className="mr-2 h-4 w-4" aria-hidden="true" />
												{formData.meetingDate
													? format(formData.meetingDate, 'PPP')
													: 'Scegli una data'}
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
										<Label className="text-sm font-semibold">Seleziona Orario</Label>
										<div className="grid grid-cols-3 gap-2">
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
													className={`transition-all hover:scale-105 ${
														formData.meetingTime === time
															? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
															: 'hover:border-primary'
													}`}
												>
													{time}
												</Button>
											))}
										</div>
									</div>
								)}

								{formData.meetingDate && formData.meetingTime && (
									<Button
										className="group w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-xl transition-all hover:scale-105"
										onClick={() => {
											// In a real app, this would integrate with a calendar service
											alert(
												`Incontro programmato per ${format(formData.meetingDate!, 'PPP')} alle ${formData.meetingTime}`
											)
										}}
									>
										<Clock className="mr-2 h-4 w-4 transition-transform group-hover:rotate-45" />
										Conferma Incontro
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

