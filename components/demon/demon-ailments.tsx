import { groupAilments } from "@/lib/demons"
import { cn } from "@/lib/utils"
import type { AnyDemon } from "megaten"

type DemonElementsProps = {
	demon: AnyDemon
}

export const DemonAilments = ({ demon }: DemonElementsProps) => {
	const ailmentsGroups = groupAilments(demon)

	return (
		<div className={cn("flex", "flex-col", "gap-1", "w-full")}>
			<h2 className={cn("font-semibold", "text-[20px]")}>Ailments</h2>
			<div className={cn("flex", "flex-col", "gap-2")}>
				<DemonAilmentSection title="Weaknesses" ailments={ailmentsGroups.Weak} />
				<DemonAilmentSection title="Resistances" ailments={ailmentsGroups.Resist} />
				<DemonAilmentSection title="Null" ailments={ailmentsGroups.Null} />
			</div>
		</div>
	)
}

type DemonElementSectionProps = {
	title: string
	ailments: string[]
}

export const DemonAilmentSection = ({ title, ailments }: DemonElementSectionProps) => {
	if (ailments.length === 0) return null

	return (
		<div className={cn("flex", "flex-col")}>
			<h3 className={cn("font-semibold", "text-[16px]")}>{title}</h3>
			<p>{ailments.join(", ")}</p>
		</div>
	)
}
