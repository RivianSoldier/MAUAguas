import { Progress } from "@/components/ui/progress";

export function Caixa({ volume, nome, capacidade }) {
    return (
        <div className="relative h-[250px] w-full bg-[#3B3B3B] rounded-lg row-span-1 col-span-1">
            <p className="pl-7 py-6 font-bold text-lg">{`${ nome }`}</p>
            <div className="absolute inset-0 flex flex-col justify-center items-center pt-10">
                <div className="relative flex flex-col items-center">
                    <div className="absolute z-20 bottom-4">
                        <p className="text-lg font-extrabold">{`${volume}`}
                            <span className="text-base font-normal">{` / ${capacidade} m`}</span>
                        </p>
                    </div>
                    <div className="absolute border-[3px] rounded-lg w-[196px] h-[30px] z-10" />
                    <Progress height="h-[155px]" value={volume && capacidade ? (volume / capacidade) * 100 : 0} color="bg-[#89CAF9]" className="w-[196px] z-0" />
                </div>
            </div>
        </div>
    );
}
