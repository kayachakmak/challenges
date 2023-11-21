import useSWR from "swr";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data } = useSWR("/api/random-character", fetcher);
  console.log(data);
  return (
    <>
      {" "}
      <h1>
        {data.firstName} {data.lastName} {data.age}
      </h1>
    </>
  );
}
