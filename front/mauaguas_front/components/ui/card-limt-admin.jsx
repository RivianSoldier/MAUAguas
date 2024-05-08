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
import Image from "next/image";

function LimtCard({ title, color }) {
  return (
    <Card className="w-[17.5rem] h-[13.375rem] bg-[#3B3B3B] border-none ml-10 drop-shadow-lg">
      <CardHeader>
        <div className="flex items-center">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill={`${color}`}
                fill-rule="evenodd"
                d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm10.01 4a1 1 0 01-1 1H10a1 1 0 110-2h.01a1 1 0 011 1zM11 6a1 1 0 10-2 0v5a1 1 0 102 0V6z"
              />
            </g>
          </svg>
          <CardTitle style={{ color: color }} className={`text-lg ml-3`}>
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="valor" className="text-white">
                Valor
              </Label>
              <Input
                id="valor"
                placeholder="Valor do limite"
                className="bg-[#505050] border-none text-white w-full"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="w-full flex flex-row items-end justify-end text-white">
          <Button className="bg-[#3270B8] hover:bg-[#2D64A5] hover:bg-opacity-50 rounded-md transition duration-300 w-28 h-9">
            Salvar
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export { LimtCard };
