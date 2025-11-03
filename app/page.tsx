'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, Palette, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1">
				{/* Hero Section */}
				<section className="relative min-h-[90vh] overflow-hidden">
					{/* Background Image with Overlay */}
					<div className="absolute inset-0">
						<Image
							src="https://images.unsplash.com/photo-1511578314322-5ef400e77e88?w=1920&h=1080&fit=crop&q=80"
							alt="Luxury event backdrop"
							fill
							className="object-cover"
							priority
							sizes="100vw"
							quality={90}
						/>
						<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
						<div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
					</div>
					
					{/* Content */}
					<div className="container relative z-10 mx-auto flex min-h-[90vh] items-center px-4 py-20 md:py-32">
						<div className="mx-auto max-w-4xl text-center">
							<div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
								<Sparkles className="h-4 w-4 text-primary" />
								Alimentato da Gemini 2.5 Flash
							</div>
							<h1 className="mb-6 animate-slide-up font-poppins text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-2xl">
								Crea il tuo evento perfetto con{' '}
								<span className="bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
									AI e stile
								</span>
							</h1>
							<p className="mb-10 animate-slide-up text-lg text-white/90 md:text-xl drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
								Progetta e organizza eventi di lusso con la nostra piattaforma
								alimentata dall&apos;intelligenza artificiale. Sfoglia template premium,
								personalizza ogni dettaglio e dai vita alla tua visione.
							</p>
							<div className="flex animate-slide-up flex-col gap-4 sm:flex-row sm:justify-center" style={{ animationDelay: '0.2s' }}>
								<Button
									asChild
									size="lg"
									className="group bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105"
								>
									<Link href="/gallery">
										Esplora i Template
										<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
									</Link>
								</Button>
								<Button
									asChild
									size="lg"
									variant="secondary"
									className="bg-white/10 text-white backdrop-blur-md border-white/20 hover:bg-white/20 hover:shadow-xl transition-all hover:scale-105"
								>
									<Link href="/contact">Contatta le Vendite</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>

				{/* How It Works Section */}
				<section className="bg-gradient-to-b from-background via-muted/20 to-background px-4 py-24 md:py-32">
					<div className="container mx-auto max-w-7xl">
						<div className="mb-16 text-center">
							<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
								<TrendingUp className="h-4 w-4" />
								Come Funziona
							</div>
							<h2 className="mb-4 font-poppins text-4xl font-bold tracking-tight text-foreground md:text-5xl">
								Tre semplici passaggi per il tuo evento perfetto
							</h2>
							<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
								Dalla scoperta del template ideale alla realizzazione del tuo evento su misura
							</p>
						</div>

						<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:gap-8">
							{/* Card 1: Browse Templates */}
							<Link href="/gallery" className="group" aria-label="Sfoglia i template di eventi">
								<Card className="relative h-[400px] overflow-hidden border-0 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 md:h-[500px]">
									<div className="absolute inset-0">
										<Image
											src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop&q=80"
											alt="Evento corporate elegante"
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-110"
											sizes="(max-width: 768px) 100vw, 33vw"
											quality={85}
										/>
										<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90" />
										<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
									</div>
									
									<CardContent className="relative flex h-full flex-col justify-end p-8 text-white">
										<div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/30">
											<Palette className="h-7 w-7 text-white" aria-hidden="true" />
										</div>
										<h3 className="mb-3 font-poppins text-2xl font-bold leading-tight drop-shadow-lg md:text-3xl">
											Sfoglia i Template
										</h3>
										<p className="mb-6 text-base leading-relaxed text-white/90 drop-shadow-md md:text-lg">
											Esplora la nostra collezione curata di template di eventi di lusso
											progettati per eventi corporate, matrimoni, concerti e fiere.
										</p>
										<div className="flex items-center gap-2 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-x-2">
											<span>Esplora la Galleria</span>
											<ArrowRight className="h-5 w-5" />
										</div>
									</CardContent>
								</Card>
							</Link>

							{/* Card 2: Customize & Preview */}
							<Link href="/configurator" className="group" aria-label="Personalizza e visualizza anteprima del tuo evento">
								<Card className="relative h-[400px] overflow-hidden border-0 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 md:h-[500px]">
									<div className="absolute inset-0">
										<Image
											src="https://images.unsplash.com/photo-1511578314322-5ef400e77e88?w=1200&h=800&fit=crop&q=80"
											alt="Configuratore AI eventi"
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-110"
											sizes="(max-width: 768px) 100vw, 33vw"
											quality={85}
										/>
										<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90" />
										<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
									</div>
									
									<CardContent className="relative flex h-full flex-col justify-end p-8 text-white">
										<div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/30">
											<Sparkles className="h-7 w-7 text-white" aria-hidden="true" />
										</div>
										<h3 className="mb-3 font-poppins text-2xl font-bold leading-tight drop-shadow-lg md:text-3xl">
											Personalizza & Anteprima
										</h3>
										<p className="mb-6 text-base leading-relaxed text-white/90 drop-shadow-md md:text-lg">
											Usa il nostro configuratore AI per personalizzare colori, caricare
											il tuo logo, aggiungere immagini e generare anteprime mozzafiato.
										</p>
										<div className="flex items-center gap-2 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-x-2">
											<span>Prova il Configuratore</span>
											<ArrowRight className="h-5 w-5" />
										</div>
									</CardContent>
								</Card>
							</Link>

							{/* Card 3: Contact Team */}
							<Link href="/contact" className="group" aria-label="Contatta il nostro team di esperti">
								<Card className="relative h-[400px] overflow-hidden border-0 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 md:h-[500px]">
									<div className="absolute inset-0">
										<Image
											src="https://images.unsplash.com/photo-1556761175-b413da4b247f?w=1200&h=800&fit=crop&q=80"
											alt="Team eventi professionale"
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-110"
											sizes="(max-width: 768px) 100vw, 33vw"
											quality={85}
										/>
										<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90" />
										<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
									</div>
									
									<CardContent className="relative flex h-full flex-col justify-end p-8 text-white">
										<div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/30">
											<Users className="h-7 w-7 text-white" aria-hidden="true" />
										</div>
										<h3 className="mb-3 font-poppins text-2xl font-bold leading-tight drop-shadow-lg md:text-3xl">
											Contatta il Team
										</h3>
										<p className="mb-6 text-base leading-relaxed text-white/90 drop-shadow-md md:text-lg">
											Connettiti con i nostri esperti di design eventi per finalizzare
											i dettagli, prenota un incontro e realizza il tuo evento personalizzato.
										</p>
										<div className="flex items-center gap-2 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-x-2">
											<span>Mettiti in Contatto</span>
											<ArrowRight className="h-5 w-5" />
										</div>
									</CardContent>
								</Card>
							</Link>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
