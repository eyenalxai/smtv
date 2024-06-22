import { DemonNameContextProvider } from "@/components/context/demon-name"
import { SkillNameContextProvider } from "@/components/context/skill-name"
import type { ReactNode } from "react"

type ContextProviderProps = {
	children: ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
	return (
		<DemonNameContextProvider>
			<SkillNameContextProvider>{children}</SkillNameContextProvider>
		</DemonNameContextProvider>
	)
}
