"use client"

import { DemonFetcher } from "@/components/demon/demon-fetcher"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useDemonName } from "@/lib/hooks/demon-name-context"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

export const DemonSearch = () => {
	const { demonName, setDemonName } = useDemonName()

	return (
		<div className={cn("flex", "flex-col", "items-center", "justify-center", "gap-8", "w-full")}>
			<div className={cn("flex", "flex-row", "justify-center", "items-center", "gap-4")}>
				<Input placeholder={"Demon"} value={demonName} onChange={(e) => setDemonName(e.target.value)} />
				<Button variant="outline" onClick={() => setDemonName("")}>
					<X className={"size-4"} />
				</Button>
			</div>
			{demonName.length >= 2 && <DemonFetcher demonName={demonName} />}
		</div>
	)
}
