import { DemonCard } from "@/components/demon/demon-card"
import { cn } from "@/lib/utils"
import { useQuery } from "@tanstack/react-query"
import type { AnyDemon } from "megaten"

type DemonFetcherProps = {
	demonName: string
}

export const DemonFetcher = ({ demonName }: DemonFetcherProps) => {
	const { data, isError, isLoading } = useQuery({
		queryKey: ["demon", demonName],
		queryFn: () => fetch(`/api/demons?demonNamePart=${demonName}`).then((res) => res.json() as unknown as AnyDemon[]),
		retry: false
	})

	if (isError) return null

	if (!data || isLoading) return null

	return (
		<div className={cn("flex", "flex-col", "gap-4", "w-full")}>
			{data.map((demon) => {
				return <DemonCard key={demon.name} demon={demon} />
			})}
		</div>
	)
}
