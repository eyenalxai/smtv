import type { AnySkill } from "megaten"

export type Tier = "S" | "A" | "B" | "C"

export type SkillWithType = {
	skill: AnySkill
	tier: Tier
}
