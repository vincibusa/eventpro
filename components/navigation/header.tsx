'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet'

export function Header() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">
				<Link
					href="/"
					className="flex items-center space-x-2"
					aria-label="EventPro Home"
				>
					<span className="font-poppins text-xl font-bold text-foreground">
						EventPro
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden items-center space-x-6 lg:flex" aria-label="Main navigation">
					<Link
						href="/"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
					>
						Home
					</Link>
					<Link
						href="/gallery"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
					>
						Gallery
					</Link>
					<Link
						href="/contact"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
					>
						Contact
					</Link>
					<Button
						asChild
						className="bg-primary text-primary-foreground hover:bg-primary/90"
					>
						<Link href="/contact">Contact Sales</Link>
					</Button>
				</nav>

				{/* Mobile Navigation */}
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild className="lg:hidden">
						<Button variant="ghost" size="icon" aria-label="Open menu">
							<Menu className="h-6 w-6" />
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="w-[300px] sm:w-[400px]">
						<nav className="flex flex-col space-y-4">
							<Link
								href="/"
								className="text-lg font-medium transition-colors hover:text-foreground"
								onClick={() => setIsOpen(false)}
							>
								Home
							</Link>
							<Link
								href="/gallery"
								className="text-lg font-medium transition-colors hover:text-foreground"
								onClick={() => setIsOpen(false)}
							>
								Gallery
							</Link>
							<Link
								href="/contact"
								className="text-lg font-medium transition-colors hover:text-foreground"
								onClick={() => setIsOpen(false)}
							>
								Contact
							</Link>
							<Button
								asChild
								className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90"
							>
								<Link href="/contact" onClick={() => setIsOpen(false)}>
									Contact Sales
								</Link>
							</Button>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	)
}

