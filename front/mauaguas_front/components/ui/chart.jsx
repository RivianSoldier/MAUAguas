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
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
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
          <p style={{ fontWeight: 600, marginRight: "4px" }}>UV:</p>
          <p style={{}}>{`${payload[0].value}`}</p>
          <p
            style={{ fontWeight: 600, marginLeft: "20px", marginRight: "4px" }}
          >
            PV:{" "}
          </p>
          <p>{`${payload[1].value}`}</p>
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
        <CartesianGrid strokeDasharray="3" vertical={false} stroke="#606060" />
        <XAxis dataKey="name" tick={{ fill: "white" }} />
        <YAxis tick={{ fill: "white" }} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#3270B8"
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#89caf9"
          strokeWidth={3}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
