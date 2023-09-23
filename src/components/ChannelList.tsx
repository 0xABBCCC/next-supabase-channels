import client from "@/lib/supabaseClient"
import Link from "next/link";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/channels/list`, { cache: "no-cache"});
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function ChannelList() {
  const data = await getData()

    return(
      <ul>
        {
          data?.map((channel: any) => (
            <li key={channel.id}>
              <Link href={`/channels/${channel.id}`}>{channel.name}</Link>
            </li>
          ))
        }
      </ul>
    )
}