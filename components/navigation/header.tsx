'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Sparkles, Home, LayoutGrid, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from '@/components/ui/sheet'

export function Header() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">
				<Link
					href="/"
					className="group flex items-center space-x-2 transition-transform hover:scale-105"
					aria-label="EventPro Home"
				>
					<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
						<Sparkles className="h-4 w-4" />
					</div>
					<span className="font-poppins text-xl font-bold text-foreground transition-colors group-hover:text-primary">
						EventPro
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden items-center space-x-6 lg:flex" aria-label="Main navigation">
					<Link
						href="/"
						className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
					>
						Home
					</Link>
					<Link
						href="/gallery"
						className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
					>
						Galleria
					</Link>
					<Link
						href="/contact"
						className="relative text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
					>
						Contatti
					</Link>
					<Button
						asChild
						className="group bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-105"
					>
						<Link href="/contact">
							Contatta Vendite
						</Link>
					</Button>
				</nav>

				{/* Mobile Navigation */}
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild className="lg:hidden">
						<Button variant="ghost" size="icon" aria-label="Apri menu" className="transition-all hover:bg-primary/10">
							<Menu className="h-6 w-6 transition-transform" />
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="w-[320px] sm:w-[400px]">
						<SheetHeader className="border-b pb-6">
							<div className="flex items-center gap-2">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<Sparkles className="h-5 w-5" />
								</div>
								<div>
									<SheetTitle className="font-poppins text-xl font-bold">Menu</SheetTitle>
									<SheetDescription>Navigazione principale</SheetDescription>
								</div>
							</div>
						</SheetHeader>
						<nav className="flex flex-col space-y-2 pt-6">
							<Link
								href="/"
								className="group flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all hover:bg-primary/10 hover:text-primary hover:translate-x-1"
								onClick={() => setIsOpen(false)}
							>
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary/20 group-hover:scale-110">
									<Home className="h-5 w-5" />
								</div>
								<span>Home</span>
							</Link>
							<Link
								href="/gallery"
								className="group flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all hover:bg-primary/10 hover:text-primary hover:translate-x-1"
								onClick={() => setIsOpen(false)}
							>
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary/20 group-hover:scale-110">
									<LayoutGrid className="h-5 w-5" />
								</div>
								<span>Galleria</span>
							</Link>
							<Link
								href="/contact"
								className="group flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all hover:bg-primary/10 hover:text-primary hover:translate-x-1"
								onClick={() => setIsOpen(false)}
							>
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary/20 group-hover:scale-110">
									<Mail className="h-5 w-5" />
								</div>
								<span>Contatti</span>
							</Link>
							<div className="border-t pt-4">
								<Button
									asChild
									className="group w-full bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl hover:scale-105"
								>
									<Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
										<Phone className="h-5 w-5 transition-transform group-hover:scale-110" />
										Contatta Vendite
									</Link>
								</Button>
							</div>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	)
}

