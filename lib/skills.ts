import { SKILLS_BY_TIER } from "@/lib/data/skills_by_tier"
import type { Tier } from "@/lib/types/skill"
import { exhaustiveCheck } from "@/lib/utils"

const isTier = (tier: string): tier is Tier => ["S", "A", "B", "C"].includes(tier)

export const getSkillsAndTiers = (
	part: string
): {
	skill: string
	tier: Tier
}[] =>
	Object.entries(SKILLS_BY_TIER).flatMap(([tier, skills]) => {
		if (isTier(tier)) {
			return skills
				.filter((skill) => skill.toLowerCase().includes(part.toLowerCase()))
				.map((skill) => ({ skill, tier }))
		}

		return []
	})

export const getColorForTier = (tier: Tier) => {
	switch (tier) {
		case "S":
			return "bg-red-500"
		case "A":
			return "bg-yellow-500"
		case "B":
			return "bg-green-500"
		case "C":
			return "bg-blue-500"
		default:
			return exhaustiveCheck(tier)
	}
}
