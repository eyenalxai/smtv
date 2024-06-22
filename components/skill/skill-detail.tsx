import { cn } from "@/lib/utils"

type SkillDetailProps = {
	title: string
	content: string
}

export const SkillDetail = ({ title, content }: SkillDetailProps) => {
	return (
		<div
			className={cn("flex", "flex-row", "gap-2", "items-center", "justify-start", "text-sm", "text-muted-foreground")}
		>
			<span className={cn("capitalize")}>{title}:</span>
			<span>{content}</span>
		</div>
	)
}
