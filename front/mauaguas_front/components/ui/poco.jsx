import { Progress } from "@/components/ui/progress";

export function Poco({ altura, capacidade }) {

    var cor = "#3B3B3B";
    var volume = (altura / capacidade) * 100

    if (volume > 75) {
        cor = "#3B3B3B";
    } else if (volume > 50) {
        cor = "#89CAF9"
    } else if (volume > 25) {
        cor = "#DAE466"
    } else {
        cor = "#F989B2"
    }

    return (
        <div className="relative h-[515px] w-full min-w-[192px] bg-[#3B3B3B] rounded-lg row-span-2 col-span-1 drop-shadow-lg">
            <div className="flex justify-between items-center py-6 px-9">
                <p className="font-semibold text-lg line-clamp-1">Poço</p>
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
            <div className="absolute inset-0 flex flex-col justify-center items-center pt-10">
                <div className="relative flex flex-col items-center">
                    <div className="absolute z-30 bottom-5">
                        <p className="text-lg font-extrabold">{`${altura}`}
                            <span className="text-base font-normal">{` / ${capacidade} m`}</span>
                        </p>
                    </div>
                    <div className="absolute border-[3px] rounded-lg w-[196px] h-[40px] z-10" />
                    <div className="absolute border-[3px] rounded-lg w-[196px] h-[56px] z-10" />
                    <Progress height="h-[400px]" value={altura && capacidade ? (altura / capacidade) * 100 : 0} color={`bg-[${cor}]`} className="w-[196px] z-0" />
                </div>
            </div>
        </div>
    );
}
