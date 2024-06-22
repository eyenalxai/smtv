import { getSkillsAndTiers } from "@/lib/skills"
import type { SkillWithType } from "@/lib/types/skill"
import { Skill } from "megaten"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
	const { searchParams } = new URL(request.url)

	const skillNamePart = searchParams.get("skillNamePart")
	if (!skillNamePart) return new NextResponse("skillName query param is required", { status: 400 })

	const matchingSkillsAndTiers = getSkillsAndTiers(skillNamePart)

	if (matchingSkillsAndTiers.length === 0) return new NextResponse("No matching skills found 1", { status: 404 })

	const yikes = matchingSkillsAndTiers
		.map(({ skill, tier }) => {
			const skillObj = Skill.get(skill)
			if (!skillObj) return null
			return {
				skill: skillObj,
				tier
			}
		})
		.filter((s) => s !== null) as SkillWithType[]

	if (yikes.length === 0) return new NextResponse("No matching skills found 2", { status: 404 })

	return NextResponse.json(yikes)
}
