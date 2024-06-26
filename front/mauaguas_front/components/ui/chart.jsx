import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#505050",
          color: "white",
          borderRadius: "6px",
          border: "none",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <p style={{ fontWeight: 600 }} className="label">{`${label}`}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontWeight: 600, marginRight: "4px" }}>Nível:</p>
          <p style={{}}>{`${(payload[0].value).toFixed(2)} m`}</p>
          <p
            style={{ fontWeight: 600, marginLeft: "20px", marginRight: "4px" }}
          >
            Vazão:
          </p>
          <p>{`${payload[1].value} L/min`}</p>
        </div>
      </div>
    );
  }

  return null;
};

function Chart({ data }) {
  return (
    <ResponsiveContainer
      className={"bg-[#3b3b3b] rounded-xl drop-shadow-xl p-8  h-full"}
      width="100%"
      height="100%"
    >
      <p className="pb-4 font-bold">Gráfico em função do tempo</p>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 24,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="#606060"
        />
        <XAxis
          dataKey="Tempo"
          tick={{ fill: "white" }}
          label={{ value: "Tempo", position: "top" }}
        />
        <YAxis
          yAxisId="left"
          tick={{ fill: "white" }}
          label={{ value: "NÍvel (m)", angle: -90, position: "left" }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fill: "white" }}
          label={{ value: "Vazão (L/min)", angle: 90, position: "right" }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          yAxisId={"left"}
          type="monotone"
          dataKey="Nível"
          stroke="#89caf9"
          strokeWidth={3}
          activeDot={{ r: 6 }}
        />
        <Line
          yAxisId={"right"}
          type="monotone"
          dataKey="Vazão"
          stroke="#3270B8"
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
