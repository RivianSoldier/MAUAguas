import Chart from "./ui/chart";
import { ModeloNivel } from "./ui/modelo-nivel-geral";
import { ModeloVazao } from "./ui/modelo-vazao-geral";

export default function DashboardPoco({ nome, formattedTime, altura, capacidade, time_pump, water_flow_in, water_flow_out, data}) {
  return (
    <div className="flex flex-col pb-4 w-full text-white mx-4 md:ml-[23rem]">
      <p className="mt-28">
        Dashboard em detalhes de
        <span className="font-bold text-lg"> {nome}</span>
      </p>
      <div className="flex items-center justify-center bg-[#3b3b3b] rounded-lg h-14 font-semibold mt-4">
        {formattedTime} OS DADOS FORAM ATUALIZADOS !
      </div>
      <div className="grid grid-cols-4 gap-3 mt-3 grid-rows-1 xl:grid-rows-3">
        <div className="row-span-2 col-span-4 xl:col-span-1 xl:row-span-2">
          <ModeloNivel altura={altura} capacidade={capacidade} hidden={true} tipo={true} />
        </div>
        <div className="row-span-2 col-span-4 h-[515px] xl:col-span-3 xl:row-span-2">
          <Chart data={data}/>
        </div>
        <div className="sm:col-span-2 xl:col-span-1 col-span-4">
          <ModeloVazao vazao={water_flow_out} hidden={true} />
        </div>
        <div className="sm:col-span-2 xl:col-span-1 col-span-4 bg-[#3B3B3B] rounded-lg drop-shadow-lg flex flex-col items-center justify-evenly h-[250px]">
          <p className="text-center font-bold w-[80%]">
            Tempo de operação da bomba
          </p>
          <div className="h-[150px] w-[150px] rounded-full border-[15px] border-white flex flex-col justify-center items-center">
            <p className="font-bold text-2xl">{time_pump} h</p>
          </div>
        </div>
        <div className="col-span-4 bg-[#3B3B3B] rounded-lg drop-shadow-lg h-full flex flex-col justify-between xl:col-span-2">
          <p className="font-bold pt-6 pl-8 mb-4">
            Pressão de entrada e saída do filtro
          </p>
          <div className="flex flex-wrap justify-evenly items-center mb-3">
            <div className="my-3 mx-5 h-[150px] min-w-[150px] rounded-full border-[15px] border-[#89CAF9] flex flex-col justify-end items-center">
              <p className="font-bold text-2xl">{water_flow_in} PSI</p>
              <p className="bg-[#3B3B3B] mt-4 -mb-4 p-3 text-[#89CAF9]">
                Entrada
              </p>
            </div>
            <div className="h-[150px] mx-5 min-w-[150px] rounded-full border-[15px] border-[#F989B2] flex flex-col justify-end items-center">
              <p className="font-bold text-2xl">{water_flow_out} PSI</p>
              <p className="bg-[#3B3B3B] mt-4 -mb-4 p-3 text-[#F989B2]">
                Saída
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
