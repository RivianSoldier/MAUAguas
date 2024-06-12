import Controle from "./controle";
const link = process.env.NEXT_PUBLIC_LINK;

async function getIds() {
  const res = await fetch(`${link}/get/reservoirs_ids`);
  const ids = await res.json();
  return ids;
}

async function getResById() {
  const res = await fetch(`${link}/get/reservoir_by_id/Poco_Principal
  `);
  const dataRes = await res.json();
  return dataRes;
}

export default async function teste() {
  const ids = await getIds();
  const dataRes = await getResById();
  console.log(ids);
  console.log(dataRes);
  return <Controle ids={ids} dataRes={dataRes} />;
}
