import Link from 'next/link'
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
	return (
		<footer className="border-t bg-gradient-to-b from-background to-muted/30">
			<div className="container px-4 py-12 md:px-6">
				<div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
					<div className="space-y-4 md:col-span-2 lg:col-span-2">
						<div className="flex items-center gap-2">
							<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
								<Sparkles className="h-5 w-5" />
							</div>
							<h3 className="font-poppins text-xl font-bold">EventPro</h3>
						</div>
						<p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
							Crea il tuo evento perfetto con AI e stile. Piattaforma premium di design eventi
							alimentata da Gemini 2.5 Flash.
						</p>
						<div className="flex flex-col gap-2 text-sm">
							<div className="flex items-center gap-2 text-muted-foreground">
								<Mail className="h-4 w-4" />
								<span>info@eventpro.it</span>
							</div>
							<div className="flex items-center gap-2 text-muted-foreground">
								<Phone className="h-4 w-4" />
								<span>+39 02 1234 5678</span>
							</div>
							<div className="flex items-center gap-2 text-muted-foreground">
								<MapPin className="h-4 w-4" />
								<span>Milano, Italia</span>
							</div>
						</div>
					</div>

					<div className="space-y-3">
						<h4 className="font-poppins font-semibold">Piattaforma</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/gallery"
									className="text-muted-foreground transition-all hover:text-primary hover:translate-x-1"
								>
									Galleria Template
								</Link>
							</li>
							<li>
								<Link
									href="/configurator"
									className="text-muted-foreground transition-all hover:text-primary hover:translate-x-1"
								>
									Configuratore
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-muted-foreground transition-all hover:text-primary hover:translate-x-1"
								>
									Contatti
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-3">
						<h4 className="font-poppins font-semibold">Risorse</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#"
									className="text-muted-foreground transition-all hover:text-primary hover:translate-x-1"
								>
									Documentazione
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground transition-all hover:text-primary hover:translate-x-1"
								>
									Supporto
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground transition-all hover:text-primary hover:translate-x-1"
								>
									Prezzi
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-3">
						<h4 className="font-poppins font-semibold">Legale</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#"
									className="text-muted-foreground transition-all hover:text-primary hover:translate-x-1"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground transition-all hover:text-primary hover:translate-x-1"
								>
									Termini di Servizio
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 border-t pt-8">
					<div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row">
						<p>
							© {new Date().getFullYear()} EventPro. Tutti i diritti riservati.
						</p>
						<p className="flex items-center gap-2">
							<Sparkles className="h-4 w-4 text-primary" />
							Powered by Gemini 2.5 Flash
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

