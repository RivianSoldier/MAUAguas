import { ChevronRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import { Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default async function Detalhes({ params, children }) {
  const link = process.env.NEXT_PUBLIC_LINK;

  function getBgColor(volume) {
    let bgcor = "bg-[#3B3B3B]";

    if (volume > 75) {
      bgcor = "bg-[#89CAF9]";
    } else if (volume > 50) {
      bgcor = "bg-[#89CAF9]";
    } else if (volume > 25) {
      bgcor = "bg-[#DAE466]";
    } else {
      bgcor = "bg-[#F989B2]";
    }

    return bgcor;
  }

  async function getIds() {
    const res = await fetch(`${link}/get/reservoirs_ids`);
    const ids = await res.json();
    return ids;
  }
  const ids = await getIds();

  async function getReservoir(id) {
    const res = await fetch(`${link}/get/reservoir_by_id/${id}`);
    const data = await res.json();
    const usefullData = [data["name"], data["height"], data["well"]];
    const waterHeight = await getReservoirStatus(id);
    usefullData.push(waterHeight[0]);
    return usefullData;
  }

  async function getReservoirStatus(id) {
    const res = await fetch(`${link}/get/lastest_reservoir_status_by_id/${id}`);
    const data = await res.json();
    const waterHeight = [data["water_height"]];
    return waterHeight;
  }

  async function getNames(reservoirs_ids) {
    const reservoirsData = {};
    for (const id of reservoirs_ids) {
      const reservoirData = await getReservoir(id);
      reservoirsData[id] = reservoirData;
    }
    return reservoirsData;
  }
  const names = await getNames(ids);

  const { slug } = params;
  const reservoirId = slug?.[0];

  function formula(primeiro, terceiro) {
    const res = Math.abs((primeiro - terceiro) / primeiro) * 100;
    return res;
  }

  return (
    <div className="h-[000px] bg-[#303030]">
      <main className="flex min-h-screen flex-col bg-[#303030]">
        <NavBar activePage="dashboard-detalhado" />
        <div className="flex flex-grow">
          <Sheet>
            <SheetTrigger className="fixed h-screen z-50 md:hidden">
              <ChevronRight className="text-white h-36 w-12 bg-[#464646] rounded-r-3xl drop-shadow-lg" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="pt-20 border-0 flex flex-col items-center justify-start bg-[#3b3b3b] gap-4 shadow-lg fixed"
            >
              <div className="flex px-2 flex-col gap-3 overflow-y-auto overflow-x-hidden pb-80 pr-2 h-screen">
                <div className="flex flex-row min-h-14 w-full border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75">
                  <p className="pl-3">Poço</p>
                  <div className="flex items-center justify-end pr-3 rounded-r-md bg-[#89caf9] h-full w-20">
                    1500 m
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="flex flex-col items-center justify-start pt-28 w-[22rem] bg-[#3b3b3b] gap-4 shadow-lg rounded-r-xl fixed invisible md:visible">
            <div className="flex px-2 flex-col gap-3 overflow-y-auto overflow-x-hidden pb-80 pr-2 h-screen">
              {Object.entries(names)
                .sort((a, b) => b[1][2] - a[1][2])
                .map(([id, name]) => {
                  return (
                    <Link
                      className="p-0 m-0"
                      href={`/dashboard-detalhado/${id}`}
                      key={id}
                    >
                      <div
                        className={`flex flex-row min-h-14 w-[19rem] border-[#505050] border-2 rounded-lg justify-between items-center text-white cursor-pointer hover:scale-[1.03] duration-75 ${
                          id === reservoirId
                            ? getBgColor(formula(name[1], name[3]))
                            : ""
                        }`}
                      >
                        <p className="pl-3">{name[0]}</p>
                        <div
                          className={`flex items-center justify-end pr-3 rounded-r-md ${getBgColor(
                            formula(name[1], name[3])
                          )} min-h-14 w-20`}
                        >
                          {name[1] - Math.abs(name[3] / 100).toFixed(2)} M
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
