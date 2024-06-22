import { SkillDetail } from "@/components/skill-detail"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getColorForTier } from "@/lib/skills"
import type { Tier } from "@/lib/types/skill"
import { cn } from "@/lib/utils"
import type { AnySkill } from "megaten"

type SkillCardProps = {
	skill: AnySkill
	tier: Tier
}

export const SkillCard = ({ skill, tier }: SkillCardProps) => {
	return (
		<Card className={cn("w-full")}>
			<CardHeader className={cn("p-4")}>
				<CardTitle
					className={cn("text-lg", "font-semibold", "flex", "flex-row", "gap-2", "items-center", "justify-start")}
				>
					<span className={cn(getColorForTier(tier), ["py-1", "px-2"], "rounded")}>{tier}</span>{" "}
					<span>{skill.name}</span>
				</CardTitle>
				{skill.aliases.length > 0 && <SkillDetail title={"aliases"} content={skill.aliases.join(", ")} />}
				<SkillDetail title={"Affinity"} content={skill.affinity} />
			</CardHeader>
			<CardContent className={cn("p-4", "w-full")}>
				<p className={cn("font-semibold")}>{skill.description}</p>
			</CardContent>
		</Card>
	)
}
