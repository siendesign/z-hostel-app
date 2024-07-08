"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Enter email address" })
    .email({ message: "invalid email" }),
  password: z
    .string()
    .min(6, { message: "password must have at least 6 characters." })
    .max(30, { message: "password must not be more than 30 characters." }),
});

type LoginFormValues = z.infer<typeof formSchema>;

const LoginForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [attributes, setAttributes] = useState({})

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginFormValues) {
    alert(JSON.stringify(data));
  }
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>welcome back! use any login option.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Form {...loginForm}>
            <form onSubmit={loginForm.handleSubmit(onSubmit)} className="">
              <div className="space-y-2">
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input placeholder="example@email.com" {...field} />
                      </FormControl>
                      {/* <FormDescription /> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormDescription /> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                

                <div className="pt-2">
                  <Button className="w-full" type="submit">
                    Signup
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col w-full gap-3">
            <hr />
            <Button variant={"outline"} className="w-full space-x-2">
              <FcGoogle className="text-lg" />{" "}
              <span className=" text-gray-700">Sign in with Google</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginForm;

//
