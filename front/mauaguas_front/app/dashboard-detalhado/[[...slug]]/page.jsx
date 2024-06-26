import DashboardPoco from "@/components/dashboard-poco";
import DashboardCaixa from "@/components/dashboard-caixa";

export default async function Page({ params }) {
  const { slug } = params;

  const link = process.env.NEXT_PUBLIC_LINK;

  function padronizarValor(valor) {
    if (valor === 0) return 0;
    const strValor = valor.toString();
    const algarismosDiferentesDeZero = strValor.replace(/[.0]/g, '');
    const primeirosQuatro = algarismosDiferentesDeZero.substring(0, 4);
    return parseFloat(primeirosQuatro);
  }

  async function getReservoir(slug) {
    const res = await fetch(`${link}/get/reservoir_by_id/${slug}`);
    const data = await res.json();
    const usefullData = [data["name"], data["height"], data["well"]];
    return usefullData;
  }

  async function getReservoirStatus(slug) {
    const res = await fetch(
      `${link}/get/lastest_reservoir_status_by_id/${slug}`
    );
    const data = await res.json();
    const status = [
      data["water_height"],
      data["water_flow_out"],
      data["water_flow_in"],
      data["time_stamp"],
      data["time"],
      data["bomb_hours"],
    ];
    return status;
  }
  const reservoir = await getReservoir(slug);
  const status = await getReservoirStatus(slug);
  const data = reservoir.concat(status);

  const time = data[6];
  const date = new Date(time);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const formattedTime = `${hour}:${minutes}`;

  async function getReservoirChart(slug) {
    const res = await fetch(`${link}/get/reservoir_status_by_id/${slug}`);
    const dataChart = await res.json();
    const usefulData = dataChart.map((item) => {
      const date = new Date(item.time_stamp);
      const hour = date.getUTCHours().toString().padStart(2, "0");
      const minute = date.getUTCMinutes().toString().padStart(2, "0");
      return {
        Tempo: `${hour}:${minute}`,
        Nível: data[1] - Math.abs(item.water_height / 100).toFixed(2),
        Vazão: parseFloat(padronizarValor(item.water_flow_out)/100),
      };
    });
    return usefulData.slice(0, 12).reverse();
  }
  const ResevoirStatus = await getReservoirChart(slug);

  if (!slug) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-3xl font-bold text-gray-700">
          Página não encontrada
        </p>
      </div>
    );
  }
  console.log(ResevoirStatus)


  return (
    <>
      {data[2] === false ? (
        <DashboardCaixa
          nome={data[0]}
          initialFormattedTime={formattedTime}
          altura={(data[1] - Math.abs(data[3] / 100).toFixed(2)).toFixed(2)}
          capacidade={data[1]}
          water_flow_out={padronizarValor(data[4])/100}
          data={ResevoirStatus}
          slug={slug}
        />
      ) : (
        <DashboardPoco
          nome={data[0]}
          initialFormattedTime={formattedTime}
          altura={(data[1] - Math.abs(data[3] / 100).toFixed(2)).toFixed(2)}
          capacidade={data[1]}
          time_pump={data[8].toFixed(0)}
          water_flow_in={padronizarValor(data[5])/100}
          water_flow_out={padronizarValor(data[4])/100}
          data={ResevoirStatus}
          slug={slug}
        />
      )}
    </>
  );
}
