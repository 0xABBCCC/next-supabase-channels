import client from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
    const { data, error } = await client.from('channels').select()
    return NextResponse.json(data);
}