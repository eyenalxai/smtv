import { DemonNameContext } from "@/components/context/demon-name"
import { useContext } from "react"

export const useDemonName = () => {
	const context = useContext(DemonNameContext)
	if (context === undefined) {
		throw new Error("useDemonName must be used within a DemonNameContextProvider")
	}
	return context
}
