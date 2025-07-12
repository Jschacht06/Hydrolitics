"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db"; 
import { redirect } from "next/navigation";
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })  
});

export async function setup(prevState: any, formData: FormData) {
  const parsed = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }
  const { name, email, password } = parsed.data;
  const existingUser = await db.user.count();
  if (existingUser > 0) {
    return {
      errors: {
        email: ["An admin user already exists. Please log in."],
      },
    };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  redirect("/login");
}