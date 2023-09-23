import client from "@/lib/supabaseClient"
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

async function getData(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/channels/get`,
    { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id}),
        cache: 'no-cache'
    });
 
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
 
  return res.json()
}

export async function generateMetadata(id: any): Promise<Metadata> {
    // fetch data
    const data = await getData(id.params.id);
   
    return {
      title: `#${data.message.name}`
    }
}


export default async function Channel({params: {id}}: {params: {id: string}}) {
    const data = await getData(id);

    return(
        <>
            <Link href={`/`}>Go Back</Link>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}