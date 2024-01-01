"use client";

import { CardWrapper } from "./card-warpper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { FormControl, FormField, FormItem, FormLabel, Form, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <CardWrapper
      headerLabel="Welcome Back!"
      backButtonLabel="Don't have an account?"
      backButtonHref="/api/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="email@example.com" type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="********" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={""} />
          <FormSuccess message={""} />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

/* 

<div className="flex bg-white w-96 flex-col text-black p-5 border rounded-md border-gray-300 gap-1">
      <h1 className="text-center text-3xl font-semibold mb-5">Login</h1>
      <input
        className="border border-gray-300 rounded-md h-10 px-2"
        type="email"
        placeholder="Username"
      />
      <input
        className="border border-gray-300 rounded-md h-10 px-2"
        type="password"
        placeholder="Password"
      />
      <Button
        onClick={() =>
          signIn("credentials", {
            username: "shyam",
            password: "pass",
            redirect: false,
            callbackUrl: "/",
          })
        }
      >
        Login
      </Button>
      <hr className="my-2" />
      <Button
        className="rounded-full"
        onClick={() => signIn("google")}
        disabled={!providers?.google}
      >
        <FaGoogle className="mx-2" /> Sign In With Google
      </Button>
      <Button
        className="rounded-full"
        onClick={() => signIn("facebook")}
        disabled={!providers?.facebook}
      >
        <FaFacebook className="mx-2" /> Sign In With Facebook
      </Button>
      <Button
        className="rounded-full"
        onClick={() => signIn("twitter")}
        disabled={!providers?.twitter}
      >
        <FaTwitter className="mx-2" /> Sign In With Twitter
      </Button>
      <div>
        <p className="text-sm">
          Don&#39;t have an account,
          <Link href="/api/auth/signup" className="text-blue-700 italic">
            sign up
          </Link>
        </p>
      </div>
    </div>
*/
