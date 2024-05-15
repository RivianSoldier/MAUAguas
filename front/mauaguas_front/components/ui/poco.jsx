import { Progress } from "@/components/ui/progress";

export function Poco({ volume, capacidade }) {
    return (
        <div className="relative h-[515px] w-full min-w-[192px] bg-[#3B3B3B] rounded-lg row-span-2 col-span-1 drop-shadow-lg">
            <p className="pl-7 py-6 font-bold text-lg">Poço</p>
            <div className="absolute inset-0 flex flex-col justify-center items-center pt-10">
                <div className="relative flex flex-col items-center">
                    <div className="absolute z-30 bottom-5">
                        <p className="text-lg font-extrabold">{`${volume}`}
                            <span className="text-base font-normal">{` / ${capacidade} m`}</span>
                        </p>
                    </div>
                    <div className="absolute border-[3px] rounded-lg w-[196px] h-[40px] z-10" />
                    <div className="absolute border-[3px] rounded-lg w-[196px] h-[56px] z-10" />
                    <Progress height="h-[400px]" value={volume && capacidade ? (volume / capacidade) * 100 : 0} color="bg-[#89CAF9]" className="w-[196px] z-0" />
                </div>
            </div>
        </div>
    );
}
