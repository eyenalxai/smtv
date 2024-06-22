import { SkillNameContextProvider } from "@/components/context/skill-name"
import type { ReactNode } from "react"

type ContextProviderProps = {
	children: ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
	return <SkillNameContextProvider>{children}</SkillNameContextProvider>
}
