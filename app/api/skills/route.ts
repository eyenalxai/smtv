import { SKILLS_BY_TIER } from "@/lib/data/skills_by_tier"
import type { SkillWithType, Tier } from "@/lib/types/skill"
import Fuse from "fuse.js"
import { Skill } from "megaten"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
	const { searchParams } = new URL(request.url)

	const skillNamePart = searchParams.get("skillNamePart")
	if (!skillNamePart) return new NextResponse("skillNamePart query param is required", { status: 400 })

	const skills = new Fuse(Array.from(Skill.map.values()), {
		includeScore: true,
		keys: ["name", "aliases"]
	})
		.search(skillNamePart)
		.filter((demon) => demon.score && demon.score <= 0.2)
		.map((demon) => demon.item)

	if (skills.length === 0) return new NextResponse("No matching skills found", { status: 404 })

	const skillsWithTiers = skills
		.map((skill) => {
			const skillFrom = Object.entries(SKILLS_BY_TIER).find(([_, skills]) => skills.includes(skill.name))
			if (!skillFrom) return null
			return {
				skill,
				tier: skillFrom[0]
			}
		})
		.filter((s) => s !== null) as SkillWithType[]

	if (skillsWithTiers.length === 0) return new NextResponse("No matching skills found", { status: 404 })

	return NextResponse.json(
		skillsWithTiers.sort((a, b) => {
			const tierOrder = ["S", "A", "B", "C"] as Tier[]
			return tierOrder.indexOf(a.tier) - tierOrder.indexOf(b.tier)
		})
	)
}
