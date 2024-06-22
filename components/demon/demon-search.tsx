"use client"

import { DemonFetcher } from "@/components/demon/demon-fetcher"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useState } from "react"

export const DemonSearch = () => {
	const [demonName, setDemonName] = useState<string>("")

	return (
		<div className={cn("flex", "flex-col", "items-center", "justify-center", "gap-8", "w-full")}>
			<Input placeholder={"Demon Name"} value={demonName} onChange={(e) => setDemonName(e.target.value)} />
			{demonName.length >= 1 && <DemonFetcher demonName={demonName} />}
		</div>
	)
}
