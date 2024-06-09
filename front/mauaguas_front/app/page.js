"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";

export default function Home() {
  const router = useRouter();
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => {
    if (
      (values.email === process.env.NEXT_PUBLIC_USER_ADMIN &&
        values.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) ||
      (values.email === process.env.NEXT_PUBLIC_USER_GENERAL &&
        values.password === process.env.NEXT_PUBLIC_GENERAL_PASSWORD)
    ) {
      router.push("/visao-geral");
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#303030]">
      <div className="flex flex-col lg:flex-row justify-center items-center w-11/12 md:w-2/3 lg:w-[64rem] lg:h-[28.75rem] bg-[#3b3b3b] rounded-xl drop-shadow-lg">
        <div className="flex flex-col w-full lg:w-[25rem] h-52 lg:h-full bg-[#3270b8] rounded-xl pt-10 pl-10">
          <div className="rounded-xl">
            <Image src="/logo_01.svg" alt="Logo" width={70} height={70} />
          </div>
          <div className="pt-8 text-white font-bold text-3xl">Fazer login</div>
        </div>
        <div className="flex flex-col justify-center items-center w-full lg:w-[40.125rem] h-80 my-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col justify-center items-center gap-8 pt-4 w-full px-6 md:px-20 lg:px-0">
              <Controller
                name="email"
                control={form.control}
                render={({ field }) => (
                  <Input
                    className="bg-[#505050] border-none text-white w-full lg:w-[26rem] h-[3.8rem]"
                    type="email"
                    placeholder="Email"
                    required
                    {...field}
                  />
                )}
              />
              <Controller
                name="password"
                control={form.control}
                render={({ field }) => (
                  <Input
                    className="bg-[#505050] border-none text-white w-full lg:w-[26rem] h-[3.8rem]"
                    type="password"
                    placeholder="Senha"
                    required
                    minLength={3}
                    {...field}
                  />
                )}
              />
            </div>

            <div className="flex flex-row w-full sm:justify-end  items-end lg:justify-end lg:items-center lg:w-[32.5rem] mt-8 px-6 md:px-20 lg:px-0">
              <Button
                type="submit"
                className=" bg-[#3270B8] text-white flex hover:bg-[#2D64A5] hover:bg-opacity-50 rounded-md transition duration-300 cursor-pointer w-full md:w-32"
                variant="primary"
              >
                Entrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
