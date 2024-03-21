import { LineChart as LChart, Line, Legend, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const mathMarksData = [
    {
      id: 1,
      name: "John",
      math_mark: 85,
      physics_mark: 70,
      chemistry_mark: 82,
    },
    {
      id: 2,
      name: "Alice",
      math_mark: 92,
      physics_mark: 89,
      chemistry_mark: 91,
    },
    { id: 3, name: "Bob", math_mark: 78, physics_mark: 75, chemistry_mark: 80 },
    {
      id: 4,
      name: "Emma",
      math_mark: 88,
      physics_mark: 82,
      chemistry_mark: 85,
    },
    {
      id: 5,
      name: "Michael",
      math_mark: 95,
      physics_mark: 90,
      chemistry_mark: 93,
    },
    {
      id: 6,
      name: "Sophia",
      math_mark: 83,
      physics_mark: 76,
      chemistry_mark: 84,
    },
    {
      id: 7,
      name: "William",
      math_mark: 90,
      physics_mark: 85,
      chemistry_mark: 88,
    },
    {
      id: 8,
      name: "Olivia",
      math_mark: 86,
      physics_mark: 81,
      chemistry_mark: 87,
    },
    {
      id: 9,
      name: "James",
      math_mark: 79,
      physics_mark: 72,
      chemistry_mark: 76,
    },
    {
      id: 10,
      name: "Emily",
      math_mark: 91,
      physics_mark: 88,
      chemistry_mark: 90,
    },
  ];
  return (
    <div>
      <LChart width={600} height={400} data={mathMarksData}>
        <XAxis dataKey="name" />
        <YAxis dataKey="math_mark" />
        <Legend />
        <Line dataKey="math_mark" stroke="red"></Line>
        <Line dataKey="physics_mark" stroke={"blue"}></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
