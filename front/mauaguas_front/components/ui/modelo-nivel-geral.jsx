import { Progress } from "@/components/ui/progress";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function ModeloNivel({ altura, capacidade, nome, tipo }) {
    const alturaPoco = "h-[515px]";
    const alturaCaixa = "h-[250px]";
    const tamanhoPoco = "h-[420px]";
    const tamanhoCaixa = "h-[155px]";

    var cor = "#3B3B3B";
    var bgcor = "bg-[#3B3B3B]";
    var textcor = "text-[#3B3B3B]"
    var volume = (altura / capacidade) * 100
    var alert = ""

    if (volume > 75) {
        cor = "#3B3B3B";
        bgcor = "bg-[#89CAF9]"
        textcor = "text-[#89CAF9]"
        alert = ""
    } else if (volume > 50) {
        cor = "#89CAF9"
        bgcor = "bg-[#89CAF9]"
        textcor = "text-[#89CAF9]"
        alert = "Limite 1 - menos grave"
    } else if (volume > 25) {
        cor = "#DAE466"
        bgcor = "bg-[#DAE466]"
        textcor = "text-[#DAE466]"
        alert = "Limite 2 - grave"
    } else {
        cor = "#F989B2"
        bgcor = "bg-[#F989B2]"
        textcor = "text-[#F989B2]"
        alert = "Limite 3 - mais grave"
    }

    return (
        <div className={`relative ${tipo == 1 ? alturaPoco : alturaCaixa} w-full min-w-[192px] bg-[#3B3B3B] rounded-lg ${tipo == 1 ? "row-span-2" : "row-span-1"} col-span-1 drop-shadow-lg z-30`}>
            <div className="flex justify-between items-center py-6 px-9">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className="z-20 max-w-40">
                                <p className="font-semibold text-lg line-clamp-1">{nome}</p>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="text-lg z-20 text-white">{nome}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className={`min-w-6 z-20 ${volume > 75 ? "hidden" : ""}`}>
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
            <div className="absolute inset-0 flex flex-col justify-center items-center pt-10">
                <div className="relative flex flex-col items-center">
                    <div className="absolute z-20 bottom-5">
                        <p className="text-lg font-extrabold">{`${altura}`}
                            <span className="text-base font-normal">{` / ${capacidade} m`}</span>
                        </p>
                    </div>
                    <div className={`absolute border-[3px] rounded-lg w-[196px] h-[40px] ${tipo == 1 ? "" : "hidden"} z-20`} />
                    <div className={`absolute border-[3px] rounded-lg w-[196px] ${tipo == 1 ? "h-[56px]" : "h-[30px]"} z-10`} />
                    <Progress height={`${tipo == 1 ? tamanhoPoco : tamanhoCaixa}`} value={altura && capacidade ? (altura / capacidade) * 100 : 0}
                        color={bgcor} className="w-[196px] z-0" />
                </div>
            </div>
        </div>
    );
}
