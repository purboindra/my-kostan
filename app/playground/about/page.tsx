"use client";

import { useSearchParams } from "next/navigation";

export default function About() {
  const seachParams = useSearchParams();

  const name = seachParams.get("name");
  return <h1>{`Hello ${name} from playground page`}</h1>;
}
