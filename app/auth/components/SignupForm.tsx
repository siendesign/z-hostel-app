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

const formSchema = z
  .object({
    full_name: z.string().min(1, { message: "Enter full name" }),
    email: z
      .string()
      .min(1, { message: "Enter email address" })
      .email({ message: "invalid email" }),
    password: z
      .string()
      .min(6, { message: "password must have at least 6 characters." })
      .max(30, { message: "password must not be more than 30 characters." }),
    confirm: z
      .string()
      .min(6, { message: "password must have at least 6 characters." })
      .max(30, { message: "password must not be more than 30 characters." }),
  })
  .refine((data) => data.confirm === data.password, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

type SignupFormValues = z.infer<typeof formSchema>;

const SignupForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signupForm = useForm<SignupFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
        full_name:"",
        email: "",
        password: "",
        confirm: "",
      },
  });

  async function onSubmit(data: SignupFormValues) {
    alert(JSON.stringify(data));
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Signup</CardTitle>
          <CardDescription>welcome, Lets get started!</CardDescription>
        </CardHeader>
        <CardContent className="">
          <Form {...signupForm}>
            <form onSubmit={signupForm.handleSubmit(onSubmit)} className="">
              <div className="space-y-2">
                <FormField
                  control={signupForm.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Deo" {...field} />
                      </FormControl>
                      {/* <FormDescription /> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
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
                  control={signupForm.control}
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
                <FormField
                  control={signupForm.control}
                  name="confirm"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
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
              <div className=" text-gray-700">Signup with Google</div>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default SignupForm;

//
