"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavigationBarProps = {
	className?: string
}

export const NavigationBar = ({ className }: NavigationBarProps) => {
	const pathname = usePathname()

	return (
		<div className={cn("w-full", "flex", "justify-center", "gap-2", className)}>
			<Link href={"/skills"}>
				<Button className={cn("w-24")} variant={pathname === "/skills" ? "default" : "outline"}>
					Skills
				</Button>
			</Link>
			<Link href={"/demons"}>
				<Button className={cn("w-24")} variant={pathname === "/demons" ? "default" : "outline"}>
					Demons
				</Button>
			</Link>
		</div>
	)
}
