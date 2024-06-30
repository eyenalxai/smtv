import Fuse from "fuse.js"
import { Demon } from "megaten"
import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
	const { searchParams } = new URL(request.url)

	const demonNamePart = searchParams.get("demonNamePart")
	if (!demonNamePart) return new NextResponse("demonNamePart query param is required", { status: 400 })

	const demons = new Fuse(Array.from(Demon.map.values()), {
		includeScore: true,
		keys: ["name", "aliases"]
	})
		.search(demonNamePart)
		.filter((demon) => demon.score && demon.score <= 0.2)
		.map((demon) => demon.item)

	if (demons.length === 0) return new NextResponse("No matching demons found", { status: 404 })

	return NextResponse.json(demons)
}
