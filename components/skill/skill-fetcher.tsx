import { SkillCard } from "@/components/skill/skill-card"
import type { SkillWithType } from "@/lib/types/skill"
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"

type SkillFetcherProps = {
	skillName: string
}

export const SkillFetcher = ({ skillName }: SkillFetcherProps) => {
	const { data, isError, isLoading } = useQuery({
		queryKey: ["skill", skillName],
		queryFn: () =>
			fetch(`/api/skills?skillNamePart=${skillName}`).then((res) => res.json() as unknown as SkillWithType[]),
		retry: false
	})

	if (isError) return null

	if (!data || isLoading) return null

	return (
		<div className={cn("flex", "flex-col", "gap-4", "w-full")}>
			{data.map(({ skill, tier }) => {
				return <SkillCard key={skill.name} skill={skill} tier={tier} />
			})}
		</div>
	)
}
