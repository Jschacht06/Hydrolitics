/* This will be the setup page for the app this only runs whenever there are 0 users in the database the point of this is so the local admin can create 1 account for him upon deployment and then only the admin can add more users if they want too.*/
"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { setup } from "./action";

export default function Setup() {
  const [state, setupAction] = useActionState(setup, undefined);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-sm flex">
        <CardHeader>
          <CardTitle>Create the admin user</CardTitle>
          <CardDescription>
            Here you can create the first admin user for your application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={setupAction}>
            <div className="flex flex-col gap-6">

              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" type="name" required />
              </div>
              {state?.errors?.email &&
                (<p className="text-red-500">{state.errors.email}</p>)}

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>

              {state?.errors?.password &&
                (<p className="text-red-500">{state.errors.password}</p>)}

              <Button type="submit" className="w-full">
                Create Admin User
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}