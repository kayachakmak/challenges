import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function theFellowshipOfTheRing() {
  const first = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/">All Volumes</Link>
      <h1>{first.title}</h1>
      <p>{first.description}</p>
      <ul>
        {first.books.map((book, index) => (
          <li key={index}>
            {book.ordinal} : {book.title}
          </li>
        ))}
      </ul>
      <Image src={first.cover} alt={first.slug} width={500} height={800} />
      <Link href="#">Previous</Link>
      <Link href="/volumes/the-two-towers">Next</Link>
    </>
  );
}
