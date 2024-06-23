"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "invalid email" }),
  password: z
    .string()
    .min(6, { message: "password must have at least 6 characters." })
    .max(30, { message: "password must not be more than 30 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center relative">
      <Button className="absolute left-0 top-0 m-5" variant={"ghost"} asChild>
        <Link href={"/"}>
          <ChevronLeft />
        </Link>
      </Button>
      <div className="">
        <h2 className="text-xl font-semibold text-gray-600">
          Administration login
        </h2>
      </div>
      <form action="" className="w-96 p-4 space-y-4">
        <Input type="text" placeholder="email@email.com" />
        <Input type="password" placeholder="password" />
        <Button className="w-full">Login</Button>
      </form>
    </div>
  );
};

export default page;
