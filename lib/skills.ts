import type { Tier } from "@/lib/types/skill"
import { exhaustiveCheck } from "@/lib/utils"

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
