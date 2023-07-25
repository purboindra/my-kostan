import Link from "next/link";

export default function Playground() {
  return (
    <div>
      <Link
        href={{
          pathname: "/playground/about",
          query: {
            names: "Purboyndra",
          },
        }}
      >
        Go to about
      </Link>
    </div>
  );
}
