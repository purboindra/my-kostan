"use client";

import Link from "next/link";
import useSWR from "swr";

const fetcher = (url: RequestInfo | URL) => fetch(url).then((r) => r.json());

export default function Playground() {
  const { data, error, isLoading } = useSWR("/playground/api/prices", fetcher);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{`Something went wrong ${error}`}</h1>;

  return (
    <div>
      {data.map((item: any) => (
        <h1 key={item.id}>{item.product}</h1>
      ))}
    </div>
  );
}
