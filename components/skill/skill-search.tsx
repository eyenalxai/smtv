"use client"

import { SkillFetcher } from "@/components/skill/skill-fetcher"
import { Input } from "@/components/ui/input"
import { useSkillName } from "@/lib/hooks/skill-name-context"
import { cn } from "@/lib/utils"

export const SkillSearch = () => {
	const { skillName, setSkillName } = useSkillName()

	return (
		<div className={cn("flex", "flex-col", "items-center", "justify-center", "gap-8", "w-full")}>
			<Input placeholder={"Skill"} value={skillName} onChange={(e) => setSkillName(e.target.value)} />
			{skillName.length >= 2 && <SkillFetcher skillName={skillName} />}
		</div>
	)
}
