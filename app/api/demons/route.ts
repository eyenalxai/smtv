import { Demon } from "megaten"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
	const { searchParams } = new URL(request.url)

	const demonNamePart = searchParams.get("demonNamePart")
	if (!demonNamePart) return new NextResponse("demonNamePart query param is required", { status: 400 })

	const demons = Array.from(Demon.map.values()).filter(
		(demon) =>
			demon.name.toLowerCase().includes(demonNamePart.toLowerCase()) ||
			demon.aliases.some((alias) => alias.toLowerCase().includes(demonNamePart.toLowerCase()))
	)

	if (demons.length === 0) return new NextResponse("No matching demons found", { status: 404 })

	return NextResponse.json(demons)
}
