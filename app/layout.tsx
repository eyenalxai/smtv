import "./globals.css"
import { NavigationBar } from "@/components/navigation-bar"
import { Providers } from "@/components/providers"
import { ScrollAnchor } from "@/components/scroll-anchor"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

const TITLE = "SMT V Skills & Demons Info"
const DESCRIPTION = "Details on skills, demon elemental affinities, and ailment susceptibility in Shin Megami Tensei V"

export const metadata: Metadata = {
	title: TITLE,
	description: DESCRIPTION,
	openGraph: {
		title: TITLE,
		description: DESCRIPTION,
		type: "website"
	}
}

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "0 0% 100%" },
		{ media: "(prefers-color-scheme: dark)", color: "222.2 84% 4.9%" }
	]
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("font-sans antialiased", fontSans.variable, fontMono.variable)}>
				<Providers attribute="class" defaultTheme="system" enableSystem>
					<NavigationBar className={cn("mt-4")} />
					<div className={cn("my-12", "px-4", "flex", "flex-col", "items-center", "justify-center", "w-full", "gap-4")}>
						<main className={cn("w-96")}>{children}</main>
					</div>
					<ScrollAnchor />
				</Providers>
			</body>
		</html>
	)
}
