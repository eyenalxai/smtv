import "./globals.css"
import { NavigationBar } from "@/components/navigation-bar"
import { Providers } from "@/components/providers"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
	title: "SMT V Skill Tier List",
	description: "A skill tier list for Shin Megami Tensei V"
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
				</Providers>
			</body>
		</html>
	)
}
