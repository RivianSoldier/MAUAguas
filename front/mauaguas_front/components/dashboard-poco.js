import Chart from "./ui/chart";
import { ModeloNivel } from "./ui/modelo-nivel-geral";
import { ModeloVazao } from "./ui/modelo-vazao-geral";

export default function DashboardPoco() {
    return (
        <div className="flex flex-col pb-4 w-full text-white mx-4 ml-[23rem]">
            <p className="mt-28">
                Dashboard em detalhes da
                <span className="font-bold text-lg"> Caixa D'água 4</span>
            </p>
            <div className="flex items-center justify-center bg-[#3b3b3b] rounded-lg h-14 font-semibold mt-4">
                19:46 OS DADOS FORAM ATUALIZADOS !
            </div>
            <div className="grid grid-cols-4 gap-3 mt-3 grid-rows-3">
                <div className="row-span-2 col-span-1">
                    <ModeloNivel
                        altura={50}
                        capacidade={100}
                        hidden={true}
                        tipo={1}
                    />
                </div>
                <div className="row-span-2 col-span-3 h-[515px]">
                    <Chart />
                </div>
                <div className="col-span-1">
                    <ModeloVazao vazao={100} maximo={1000} hidden={true} />
                </div>
                <div className="col-span-1 bg-[#3B3B3B] rounded-lg drop-shadow-lg h-full flex flex-col items-center justify-evenly">
                    <p className="text-center font-bold w-[80%]">Tempo de operação da bomba</p>
                    <div className="h-[150px] w-[150px] rounded-full border-[15px] border-white flex flex-col justify-end items-center">
                        <p className="font-bold text-2xl">12 h</p>
                        <p className="bg-[#3B3B3B] mt-4 -mb-4 p-3">Entrada</p>
                    </div>
                </div>
                <div className="col-span-2 bg-[#3B3B3B] rounded-lg drop-shadow-lg h-full">
                    <p className="font-bold pt-6 pl-8">Pressão de entrada e saída do filtro</p>
                    
                </div>
            </div>
        </div>
    );
}
