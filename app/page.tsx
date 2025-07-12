import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export default async function Home() {
  const userCount = await db.user.count();

  if (userCount === 0) {
    redirect("/setup");
  } else {
    redirect("/login");
  }
  return null;
}