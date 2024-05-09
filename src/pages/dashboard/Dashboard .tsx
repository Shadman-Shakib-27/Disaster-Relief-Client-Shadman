import { useGetAllPostQuery } from "@/redux/feathers/posts/postApi";
import { TPosts } from "@/types";
import { TChartLabel } from "@/types/chart.type";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#996aad",
  "#1ba1f5",
  "#fa25f3",
  "#62e354",
  "#37e3fa",
  "#334af5",
  "#8d36e3",
  "#ed55b5",
  "#a938eb",
  "#9c2281",
  "#1a5275",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: TChartLabel) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Dashboard = () => {
  const posts = useGetAllPostQuery(undefined);

  const chartData = posts?.data?.map((d: TPosts) => {
    const parts = d.quantity.split(" ");
    const quantity = parseInt(parts[0]);

    const data = {
      name: d.title,
      quantity,
    };

    return data;
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={700} height={700}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={180}
          // fill="#8884d8"
          dataKey="quantity"
        >
          {chartData?.map((entry, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Pie
          data={chartData}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="quantity"
        >
          {chartData?.map((entry, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Dashboard;
