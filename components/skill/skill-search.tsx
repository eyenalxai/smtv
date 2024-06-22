"use client"

import { SkillFetcher } from "@/components/skill/skill-fetcher"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useState } from "react"

export const SkillSearch = () => {
	const [skillName, setSkillName] = useState<string>("")

	return (
		<div className={cn("flex", "flex-col", "items-center", "justify-center", "gap-8", "w-full")}>
			<Input placeholder={"Skill Name"} value={skillName} onChange={(e) => setSkillName(e.target.value)} />
			{skillName.length >= 2 && <SkillFetcher skillName={skillName} />}
		</div>
	)
}
