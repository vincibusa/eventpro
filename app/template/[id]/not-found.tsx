import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/navigation/header'
import { Footer } from '@/components/navigation/footer'

import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex flex-1 items-center justify-center px-4 py-20">
				<div className="text-center">
					<div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 text-destructive">
						<svg
							className="h-10 w-10"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							/>
						</svg>
					</div>
					<h1 className="mb-4 font-poppins text-4xl font-bold tracking-tight md:text-5xl">
						Template Non Trovato
					</h1>
					<p className="mb-8 text-lg text-muted-foreground">
						Il template che stai cercando non esiste o è stato rimosso.
					</p>
					<Button asChild size="lg" className="group">
						<Link href="/gallery">
							<ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
							Torna alla Galleria
						</Link>
					</Button>
				</div>
			</main>
			<Footer />
		</div>
	)
}

