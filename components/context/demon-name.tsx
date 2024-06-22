import { type Dispatch, type ReactNode, type SetStateAction, createContext, useState } from "react"

export const DemonNameContext = createContext<
	| {
			demonName: string
			setDemonName: Dispatch<SetStateAction<string>>
	  }
	| undefined
>(undefined)

type DemonNameContextProviderProps = {
	children: ReactNode
}

export const DemonNameContextProvider = ({ children }: DemonNameContextProviderProps) => {
	const [demonName, setDemonName] = useState("")

	return (
		<DemonNameContext.Provider
			value={{
				demonName,
				setDemonName
			}}
		>
			{children}
		</DemonNameContext.Provider>
	)
}
