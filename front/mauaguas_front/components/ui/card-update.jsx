import { Input } from "@/components/ui/input";
export function CardUpdate() {
  return (
    <div className="flex lg:col-span-1 col-span-2 min-h-36 justify-around items-center gap-6 text-white text-sm bg-[#3b3b3b] drop-shadow-lg rounded-lg px-2">
      <div className="flex flex-col gap-2">
        <p>ID</p>
        <p className="flex h-12 items-center">1</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Nome</p>
        <Input className="bg-[#505050] border-none text-white w-full h-12" />
      </div>
      <div className="flex flex-col gap-2">
        <p>Altura</p>
        <Input className="bg-[#505050] border-none text-white w-full h-12" />
      </div>
    </div>
  );
}
