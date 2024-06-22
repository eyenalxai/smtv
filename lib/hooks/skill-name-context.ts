import { SkillNameContext } from "@/components/context/skill-name"
import { useContext } from "react"

export const useSkillName = () => {
	const context = useContext(SkillNameContext)
	if (context === undefined) {
		throw new Error("useSkillName must be used within a SkillNameContextProvider")
	}
	return context
}
