import { type Dispatch, type ReactNode, type SetStateAction, createContext, useState } from "react"

export const SkillNameContext = createContext<
	| {
			skillName: string
			setSkillName: Dispatch<SetStateAction<string>>
	  }
	| undefined
>(undefined)

type SkillNameContextProviderProps = {
	children: ReactNode
}

export const SkillNameContextProvider = ({ children }: SkillNameContextProviderProps) => {
	const [skillName, setSkillName] = useState("")

	return (
		<SkillNameContext.Provider
			value={{
				skillName,
				setSkillName
			}}
		>
			{children}
		</SkillNameContext.Provider>
	)
}
