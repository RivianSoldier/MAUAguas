"use client";
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

const data = [
  {
    name: "Page A",
    Vazão: 4000,
    Nível: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    Vazão: 3000,
    Nível: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    Vazão: 2000,
    Nível: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    Vazão: 2780,
    Nível: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    Vazão: 1890,
    Nível: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    Vazão: 2390,
    Nível: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    Vazão: 3490,
    Nível: 4300,
    amt: 2100,
  },
];

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
          <p style={{ fontWeight: 600, marginRight: "4px" }}>Vazão:</p>
          <p style={{}}>{`${payload[0].value} L`}</p>
          <p
            style={{ fontWeight: 600, marginLeft: "20px", marginRight: "4px" }}
          >
            Nível:{" "}
          </p>
          <p>{`${payload[1].value} L/s`}</p>
        </div>
      </div>
    );
  }

  return null;
};

function Chart() {
  return (
    <ResponsiveContainer
      className={"bg-[#3b3b3b] rounded-xl drop-shadow-xl p-8  h-full"}
      width="100%"
      height="100%"
    >
      <p className="pb-4 font-bold">O tal do titulo aqui</p>
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
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#606060" />
        <XAxis dataKey="name" tick={{ fill: "white" }} label={{ value: 'Tempo', position: 'top' }} />
        <YAxis yAxisId="left" tick={{ fill: "white" }} label={{ value: 'NÍvel (L)', angle: -90, position: 'left' }} />
        <YAxis yAxisId="right" orientation="right" tick={{ fill: "white" }}  label={{ value: 'Vazão (L/s)', angle: 90, position: 'right' }} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          yAxisId={"left"}
          type="monotone"
          dataKey="Nível"
          stroke="#3270B8"
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
        <Line
          yAxisId={"right"}
          type="monotone"
          dataKey="Vazão"
          stroke="#89caf9"
          strokeWidth={3}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
