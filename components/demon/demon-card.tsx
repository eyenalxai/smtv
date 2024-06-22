import { DemonAilments } from "@/components/demon/demon-ailments"
import { DemonElements } from "@/components/demon/demon-elements"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { hasAilments, hasElements } from "@/lib/demons"
import { cn } from "@/lib/utils"
import type { AnyDemon } from "megaten"

type DemonCardProps = {
	demon: AnyDemon
}

export const DemonCard = ({ demon }: DemonCardProps) => {
	const someElements = hasElements(demon)
	const someAilments = hasAilments(demon)

	return (
		<Card className={cn("w-full")}>
			<CardHeader className={cn("p-4")}>
				<CardTitle>{demon.name}</CardTitle>
				{demon.aliases.length > 0 && <CardDescription>{demon.aliases.join(", ")}</CardDescription>}
			</CardHeader>
			{(someElements || someAilments) && (
				<CardContent className={cn("p-4")}>
					{someElements && <DemonElements demon={demon} />}
					{someAilments && (
						<>
							{someElements && <Separator className={cn("my-4")} />}
							<DemonAilments demon={demon} />
						</>
					)}
				</CardContent>
			)}
		</Card>
	)
}
