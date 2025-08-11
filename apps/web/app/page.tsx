import { client } from "@repo/prisma/client";

export default async function Home() {
  const user = await client.user.findFirst({
    orderBy: { id: "asc" },
    take: 1,
  });

  return (
    <div>
      {user?.username}
      {user?.password}
    </div>
  );
}
