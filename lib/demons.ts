import type { AnyDemon } from "megaten"

export const hasAilments = (demon: AnyDemon): boolean =>
	!!demon.resistances?.ailments && Object.keys(demon.resistances.ailments).length > 0

export const hasElements = (demon: AnyDemon): boolean =>
	demon.resistances?.weak.length > 0 ||
	demon.resistances?.resist.length > 0 ||
	demon.resistances?.null.length > 0 ||
	demon.resistances?.drain.length > 0 ||
	demon.resistances?.repel.length > 0

export const groupAilments = (demon: AnyDemon) => {
	const grouped: Record<string, string[]> = { Weak: [], Resist: [], Null: [] }
	for (const [ailment, resistance] of Object.entries(demon.resistances?.ailments ?? {})) {
		if (resistance && Object.keys(grouped).includes(resistance)) {
			grouped[resistance].push(ailment)
		}
	}
	return grouped
}
