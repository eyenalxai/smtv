import { cn } from "@/lib/utils"
import type { AnyDemon } from "megaten"

type DemonElementsProps = {
	demon: AnyDemon
}

export const DemonElements = ({ demon }: DemonElementsProps) => {
	return (
		<div className={cn("flex", "flex-col", "gap-1", "w-full")}>
			<h2 className={cn("font-semibold", "text-[20px]")}>Elemental</h2>
			<div className={cn("flex", "flex-col", "gap-2")}>
				<DemonElementSection title="Weaknesses" elements={demon.resistances.weak} />
				<DemonElementSection title="Resistances" elements={demon.resistances.resist} />
				<DemonElementSection title="Nullifications" elements={demon.resistances.null} />
				<DemonElementSection title="Drain" elements={demon.resistances.drain} />
				<DemonElementSection title="Repulsions" elements={demon.resistances.repel} />
			</div>
		</div>
	)
}

type DemonElementSectionProps = {
	title: string
	elements: string[]
}

export const DemonElementSection = ({ title, elements }: DemonElementSectionProps) => {
	if (elements.length === 0) return null

	return (
		<div className={cn("flex", "flex-col")}>
			<h3 className={cn("font-semibold", "text-[16px]")}>{title}</h3>
			<p>{elements.join(", ")}</p>
		</div>
	)
}
