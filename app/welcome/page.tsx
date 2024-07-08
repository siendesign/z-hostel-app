"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Image, X } from "lucide-react";

import React, { ChangeEvent, KeyboardEvent, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const formSchema = z.object({
  school_name: z.string(),
  gender: z.enum(["male", "female"], {
    required_error: "Please select a gender.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  RoomType: z.enum(["1", "2", "4"], {
    required_error: "Please select a room type.",
  }),
});

type FormValues = z.infer<typeof formSchema>;
const Page = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      school_name: "",
      gender: undefined,
    },
  });

  async function onSubmit(data: FormValues) {
    alert(JSON.stringify(data));
  }
  return (
    <div className="w-screen  flex justify-center pt-10 ">
      <div className="flex flex-col gap-3 w-[500px]  p-2 mt-20 mb-10">
        <div className="w-full">
          <h1 className="font-medium text-2xl text-gray-700">Welcome, Zilda</h1>
          <p className="text-sm text-gray-400">
            Please enter your info to best room for you
          </p>
        </div>
        <div className="mt-4  space-y-2">
          <p className="text-sm font-medium">Profile Image</p>
          <div className="">
            <div className="h-20 w-20 rounded bg-slate-400 flex justify-center items-center">
              <Image color="#fff" />
            </div>
            <div className="flex items-center justify-center w-full mt-2">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            <span className="text-[0.8rem] text-muted-foreground pt-4">
              Profile image
            </span>
          </div>
        </div>
        <div className="mt-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="school_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>School Name</FormLabel>
                    <FormControl>
                      <Input placeholder="School Name" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="school_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    {/* <FormDescription /> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      This use gender assigned at birth.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Your date of birth is used to calculate your age.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* custom  */}
              <ArrayManager />
              <FormField
                control={form.control}
                name="RoomType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Room configuration</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a room configuration" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1 in a room</SelectItem>
                        <SelectItem value="2">2 in a room</SelectItem>
                        <SelectItem value="4">4 in a room</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      This determines the maximum number of people in your room.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-2 mb-10">
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

const ArrayManager: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState<string>("");
  const [attirbutes, setAttributes] = useState<string[]>([]);

  const addItem = (): void => {
    if (newItem.trim() !== "") {
      if (!items.includes(newItem)) {
        setItems([...items, newItem]);
        setAttributes([...attirbutes, newItem]);
        setNewItem("");
      } else {
        alert("This item already exists in the array!");
      }
    }
  };

  const deleteItem = (index: number): void => {
    const updatedItems = attirbutes.filter((_, i) => i !== index);
    setAttributes(updatedItems);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewItem(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === " " || e.code === "Space") {
      e.preventDefault(); // Prevent form submission if within a form
      executeFunction();
    }
  };

  const executeFunction = (): void => {
    addItem();
  };

  const predictions = useMemo(() => {
    if (newItem.length === 0) return [];
    return items.filter(
      (item) =>
        item.toLowerCase().includes(newItem.toLowerCase()) &&
        item.toLowerCase() !== newItem.toLowerCase()
    );
  }, [items, newItem]);

  const handlePredictionClick = (prediction: string): void => {
    // setNewItem(prediction);
    if (!attirbutes.includes(prediction)) {
      setAttributes([...attirbutes, prediction]);
    }
  };

  return (
    <div>
      <div className="relative">
        <label
          htmlFor="custom-select"
          className="block text-sm font-medium mb-2"
        >
          Select Qualities
        </label>

        {/* {attirbutes.map((att, index) => (
          <p key={index} className="">
            {att}
          </p>
        ))} */}

        <div className="border rounded-lg  px-2 py-1.5 flex items-center shadow-sm gap-1 flex-wrap">
          {attirbutes.map((item, index) => (
            <div
              key={index}
              className="h-6 bg-slate-500 pl-2 pr-1 rounded text-white text-sm flex items-center justify-between gap-1"
            >
              <span className="">{item}</span>
              <X
                onClick={() => deleteItem(index)}
                size={16}
                className="hover:bg-slate-400 rounded hover:cursor-pointer"
              />
            </div>
          ))}

          <input
            className="flex-1 outline-none text-sm"
            type="text"
            value={newItem}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter new item"
          />
        </div>
        <div className="text-[0.8rem] text-muted-foreground mt-1.5">
          Use the "spacebar" key to enter attirbutes.
        </div>
        <div className="  w-full bg-transparent">
          {predictions.length > 0 && (
            <div className="mt-2 border bg-white rounded ">
              <div className="p-2 text-xs font-bold">Qualities</div>
              <hr />
              <ul>
                {predictions.map((prediction, index) => (
                  <li
                    key={index}
                    onClick={() => handlePredictionClick(prediction)}
                    className="hover:cursor-pointer hover:bg-slate-100 p-2 text-gray-600 text-md"
                  >
                    {prediction}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
