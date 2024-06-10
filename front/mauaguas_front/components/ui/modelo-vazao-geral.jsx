import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ModeloVazao({
  vazao = 0,
  maximo = 100,
  nome = "Vazão",
  tipo = 0,
  hidden = false,
  className
}) {
  const alturaPoco = "h-[515px]";
  const alturaCaixa = "h-[250px]";
  const bordaPoco = "border-[380px]";
  const bordaCaixa = "border-[100px]";

  var cor = "#89CAF9";
  var bordercor = "border-b-[#89CAF9]";
  var textcor = "text-[#89CAF9]";
  var razao = (vazao / maximo) * 100;
  var alert = "";

  if (razao > 75) {
    cor = "#89CAF9";
    bordercor = "border-b-[#89CAF9]";
    textcor = "text-[#89CAF9]";
    alert = "Vazão Acima de 75%";
  } else if (razao > 50) {
    cor = "#89CAF9";
    bordercor = "border-b-[#89CAF9]";
    textcor = "text-[#89CAF9]";
    alert = "Vazão Acima de 50%";
  } else if (razao > 25) {
    cor = "#DAE466";
    bordercor = "border-b-[#DAE466]";
    textcor = "text-[#DAE466]";
    alert = "Vazão Acima de 25%";
  } else {
    cor = "#F989B2";
    bordercor = "border-b-[#F989B2]";
    textcor = "text-[#F989B2]";
    alert = "Vazão Abaixo de 25%";
  }

  return (
    <div
      className={`relative ${
        tipo == 1 ? alturaPoco : alturaCaixa
      } w-full min-w-[192px] bg-[#3B3B3B] rounded-lg ${
        tipo == 1 ? "row-span-2" : "row-span-1"
      } col-span-1 drop-shadow-lg ${className}`}
    >
      <div className="flex justify-between items-center pt-6 px-9 z-40">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="z-20 w-4/5 max-h-40">
                <p class="line-clamp-1 font-semibold text-lg">{nome}</p>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-lg text-white">{nome}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className={`min-w-6 z-20 ${hidden == true ? "hidden" : ""}`}>
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
                      fill={cor}
                      fill-rule="evenodd"
                      d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm10.01 4a1 1 0 01-1 1H10a1 1 0 110-2h.01a1 1 0 011 1zM11 6a1 1 0 10-2 0v5a1 1 0 102 0V6z"
                    />
                  </g>
                </svg>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className={`text-lg ${textcor}`}>{alert}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center pt-6">
        <div className="relative flex flex-col items-center w-full">
          <div className="absolute z-20 bottom-5">
            <p className="text-lg font-extrabold text-center">
              {`${vazao}`}
              <span className="text-base font-bold drop-shadow-lg"> PSI</span>
            </p>
          </div>
          <div
            className={`relative ${
              tipo == 1
                ? "min-w-[90px] min-h-[90px]"
                : "min-w-[70px] min-h-[70px]"
            } z-10 w-full flex justify-center`}
          >
            <div
              className={`absolute ${
                tipo == 1 ? "h-[79px] w-[90px]" : "h-[61px] w-[70px]"
              } bg-[#3B3B3B] z-10`}
            />
            <Image
              src="/faucet.svg"
              alt="Faucet"
              width={tipo == 1 ? 90 : 70}
              height={tipo == 1 ? 90 : 70}
              className={`absolute z-10 ${
                tipo == 1 ? "mr-[62px]" : "mr-[49px]"
              }`}
            />
          </div>
          <div
            className={`w-0 h-0 ${
              tipo == 1 ? bordaPoco : bordaCaixa
            } border-transparent ${bordercor} border-t-0 ${
              tipo == 1 ? "-mt-12" : "-mt-4"
            }`}
            style={{
              borderLeftWidth: razao * 0.9 < 90 ? `${razao * 0.9}px` : 90,
              borderRightWidth: razao * 0.9 < 90 ? `${razao * 0.9}px` : 90,
            }}
          />
          <div className="w-4/5 rounded-xl border-solid border-white border-2" />
        </div>
      </div>
    </div>
  );
}
