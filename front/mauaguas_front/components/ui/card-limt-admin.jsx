"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  limit: z.number().min(1).max(100),
});
function LimtCard({ title, color }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      limit: "",
    },
  });

  function onSubmit(data) {
    console.log("onSubmit called", data);
  }

  return (
    <Form {...form}>
      <Card
        className="flex-grow 
      w-[17.5rem]  bg-[#3B3B3B] border-none drop-shadow-lg max-w-full mx-6 mb-10"
      >
        <CardHeader>
          <div className="flex items-center">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  fill={`${color}`}
                  fillRule="evenodd"
                  d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm10.01 4a1 1 0 01-1 1H10a1 1 0 110-2h.01a1 1 0 011 1zM11 6a1 1 0 10-2 0v5a1 1 0 102 0V6z"
                />
              </g>
            </svg>
            <CardTitle style={{ color: color }} className="text-lg ml-3">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="grid w-full items-center">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="valor" className="text-white">
                  Valor (%)
                </Label>
                <FormField
                  name="limit"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="bg-[#505050] border-none text-white w-full"
                          type="number"
                          max="100"
                          min="1"
                          placeholder="Valor do limite"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-[#3270B8] hover:bg-[#2D64A5] hover:bg-opacity-50 rounded-md transition duration-300 w-28 h-9"
                >
                  Salvar
                </Button>
              </div>

              <div className="w-full flex flex-row items-end justify-end text-white"></div>
            </div>
          </form>
        </CardContent>
      </Card>
    </Form>
  );
}

export { LimtCard };
