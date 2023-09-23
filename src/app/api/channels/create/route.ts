import client from "@/lib/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {

        const body = await req.json();

        if (!body || body.channelName === null || body.channelName === "") {
            return NextResponse.json( { message: `Invalid Channel name`}, { status: 403 } );
        } else {
            const { error } = await client.from('channels').insert({ name: body.channelName })
            return NextResponse.json( { message: `Successfully created channel: ${body.channelName}` }, { status: 200 } );
        }
    } catch (error) {
        return NextResponse.json( { message: error }, { status: 403 } );
    }
}