"use client";

import NavBar from "@/components/NavBar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CardUpdate } from "@/components/ui/card-update";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema1 = z.object({
  limit1: z.string().min(1).max(3),
});
const FormSchema2 = z.object({
  limit2: z.string().min(1).max(3),
});
const FormSchema3 = z.object({
  limit3: z.string().min(1).max(3),
});
const link = process.env.NEXT_PUBLIC_LINK;

export default function Controle({ ids, dataRes }) {
  const form1 = useForm({
    resolver: zodResolver(FormSchema1),
    defaultValues: {
      limit1: "",
    },
  });
  const form2 = useForm({
    resolver: zodResolver(FormSchema2),
    defaultValues: {
      limit2: "",
    },
  });
  const form3 = useForm({
    resolver: zodResolver(FormSchema3),
    defaultValues: {
      limit3: "",
    },
  });
  function onSubmit1(data) {
    ids.forEach(async (id) => {
      try {
        const res = await fetch(`${link}/update/alert_limit_1/${id}/${data.limit1}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        console.log(`Limite atualizado para ${id}:`, data.limit1);
      } catch (error) {
        console.error(`Erro ao atualizar limite para ${id}:`, error);
      }
    });
  }

  function onSubmit2(data) {
    data.limit2 = parseInt(data.limit2);
    console.log("onSubmit called", data);
  }
  function onSubmit3(data) {
    data.limit3 = parseInt(data.limit3);
    console.log("onSubmit called", data);
  }

  return (
    <main className="flex min-h-screen w-full flex-col bg-[#303030]">
      <NavBar activePage="controle" />
      <div className="mt-32">
        <div className="flex justify-start text-2xl mb-10 ml-10">
          <p className="text-white font-bold text-2xl">
            Controle do Administrador
          </p>
        </div>
        <div className="flex flex-wrap mx-4">
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
                      fill={"#89caf9"}
                      fillRule="evenodd"
                      d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm10.01 4a1 1 0 01-1 1H10a1 1 0 110-2h.01a1 1 0 011 1zM11 6a1 1 0 10-2 0v5a1 1 0 102 0V6z"
                    />
                  </g>
                </svg>
                <CardTitle
                  style={{ color: "#89caf9" }}
                  className="text-lg ml-3"
                >
                  Limite 1 - Menos Grave
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Form {...form1}>
                <form
                  onSubmit={form1.handleSubmit(onSubmit1)}
                  className="w-full"
                >
                  <div className="grid w-full items-center">
                    <div className="flex flex-col space-y-4">
                      <FormField
                        control={form1.control}
                        name="limit1"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Valor (%)
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-[#505050] border-none text-white w-full mb-4"
                                type="text"
                                placeholder="Valor do limite"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="bg-[#3270B8] hover:bg-[#2D64A5] hover:bg-opacity-50 rounded-md transition duration-300 w-28 h-9 self-end"
                      >
                        Salvar
                      </Button>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
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
                      fill={"#dae466"}
                      fillRule="evenodd"
                      d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm10.01 4a1 1 0 01-1 1H10a1 1 0 110-2h.01a1 1 0 011 1zM11 6a1 1 0 10-2 0v5a1 1 0 102 0V6z"
                    />
                  </g>
                </svg>
                <CardTitle
                  style={{ color: "#dae466" }}
                  className="text-lg ml-3"
                >
                  Limite 2 - Grave
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Form {...form2}>
                <form
                  onSubmit={form2.handleSubmit(onSubmit2)}
                  className="w-full"
                >
                  <div className="grid w-full items-center">
                    <div className="flex flex-col space-y-4">
                      <FormField
                        control={form2.control}
                        name="limit2"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Valor (%)
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-[#505050] border-none text-white w-full mb-4"
                                type="text"
                                placeholder="Valor do limite"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="bg-[#3270B8] hover:bg-[#2D64A5] hover:bg-opacity-50 rounded-md transition duration-300 w-28 h-9 self-end"
                      >
                        Salvar
                      </Button>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
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
                      fill={"#f989b2"}
                      fillRule="evenodd"
                      d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm10.01 4a1 1 0 01-1 1H10a1 1 0 110-2h.01a1 1 0 011 1zM11 6a1 1 0 10-2 0v5a1 1 0 102 0V6z"
                    />
                  </g>
                </svg>
                <CardTitle
                  style={{ color: "#f989b2" }}
                  className="text-lg ml-3"
                >
                  Limite 3 - Mais Grave
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Form {...form3}>
                <form
                  onSubmit={form3.handleSubmit(onSubmit3)}
                  className="w-full"
                >
                  <div className="grid w-full items-center">
                    <div className="flex flex-col space-y-4">
                      <FormField
                        control={form3.control}
                        name="limit3"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">
                              Valor (%)
                            </FormLabel>
                            <FormControl>
                              <Input
                                className="bg-[#505050] border-none text-white w-full mb-4"
                                type="text"
                                placeholder="Valor do limite"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="bg-[#3270B8] hover:bg-[#2D64A5] hover:bg-opacity-50 rounded-md transition duration-300 w-28 h-9 self-end"
                      >
                        Salvar
                      </Button>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-6 justify-between mx-10 mt-10 items-center gap-4">
          <div className="flex gap-4 lg:col-span-2 md:col-span-3 col-span-6 col-start-1 w-full"></div>
          <div className="lg:col-start-5 lg:col-span-2 md:col-span-2 md:col-start-5 col-span-6 col-start-1 ">
            <Button className="w-full h-14 bg-[#3270B8] hover:bg-[#2D64A5] hover:bg-opacity-50">
              Salvar alterações
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mx-10 my-5">
          <CardUpdate></CardUpdate>
          <CardUpdate></CardUpdate>
        </div>
      </div>
    </main>
  );
}
