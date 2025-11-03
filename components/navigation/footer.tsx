import Link from 'next/link'

export function Footer() {
	return (
		<footer className="border-t bg-background">
			<div className="container px-4 py-12 md:px-6">
				<div className="grid gap-8 md:grid-cols-4">
					<div className="space-y-3">
						<h3 className="font-poppins text-lg font-semibold">EventPro</h3>
						<p className="text-sm text-muted-foreground">
							Create your perfect event with AI and style. Premium event design
							platform powered by Gemini 2.5 Flash.
						</p>
					</div>

					<div className="space-y-3">
						<h4 className="font-semibold">Platform</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/gallery"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									Template Gallery
								</Link>
							</li>
							<li>
								<Link
									href="/configurator"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									Configurator
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-3">
						<h4 className="font-semibold">Resources</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									Documentation
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									Support
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									Pricing
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-3">
						<h4 className="font-semibold">Legal</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground transition-colors hover:text-foreground"
								>
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
					<p>
						© {new Date().getFullYear()} EventPro. All rights reserved. Powered
						by Gemini 2.5 Flash.
					</p>
				</div>
			</div>
		</footer>
	)
}

