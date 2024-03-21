import {
  BarChart as BChart,
  Bar,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
} from "recharts";

const BarChart = () => {
  const chartData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <div>
      <BChart height={500} width={600} data={chartData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis dataKey={"pv"}></YAxis>
        <Bar dataKey="pv" fill="skyblue"></Bar>
        <Bar dataKey="uv" fill="violet"></Bar>
        <Tooltip />
        <Legend />
      </BChart>
    </div>
  );
};

export default BarChart;
