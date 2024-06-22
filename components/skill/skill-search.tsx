"use client"

import { SkillFetcher } from "@/components/skill/skill-fetcher"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSkillName } from "@/lib/hooks/skill-name-context"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

export const SkillSearch = () => {
	const { skillName, setSkillName } = useSkillName()

	return (
		<div className={cn("flex", "flex-col", "items-center", "justify-center", "gap-8", "w-full")}>
			<div className={cn("flex", "flex-row", "justify-center", "items-center", "gap-4")}>
				<Input placeholder={"Skill"} value={skillName} onChange={(e) => setSkillName(e.target.value)} />
				<Button variant="outline" onClick={() => setSkillName("")}>
					<X className={"size-4"} />
				</Button>
			</div>
			{skillName.length >= 2 && <SkillFetcher skillName={skillName} />}
		</div>
	)
}
