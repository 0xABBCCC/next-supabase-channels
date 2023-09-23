import client from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        if (!body || body.id === null || body.id === "") {
            return NextResponse.json( { message: "Invalid Channel name" }, { status: 403 } );
        } else {

            const channelID: string = body.id;
            const { data: channel } = await client.from("channels").select().match( { id: channelID } ).single();

            if (!channel) {
                return NextResponse.json( { message: `${channelID} doesn't exist!`}, { status: 403 });
            } else {
                return NextResponse.json( { message: channel }, { status: 200 });
            }
        }
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 403 });
    }
}