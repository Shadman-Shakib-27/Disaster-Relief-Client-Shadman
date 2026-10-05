import { Button } from "@/components/ui/button";
import { useGetAllPostQuery } from "@/redux/features/posts/postApi";
import { TPosts } from "@/types";
import { HeartHandshake, Package, Plus, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#f5a524", "#58b368", "#2b8a78", "#e5754f", "#7d8ac7"];

type ChartItem = {
  name: string;
  quantity: number;
};

const Dashboard = () => {
  const { data, isLoading } = useGetAllPostQuery(undefined);
  const posts = (data ?? []) as TPosts[];
  const totalQuantity = posts.reduce(
    (total, post) => total + (Number.parseInt(String(post.quantity), 10) || 0),
    0,
  );
  const categories = new Set(
    posts.map((post) => post.category).filter(Boolean),
  );
  const chartData = posts.reduce<ChartItem[]>((items, post) => {
    const quantity = Number.parseInt(String(post.quantity), 10) || 0;
    const existing = items.find((item) => item.name === post.category);

    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({ name: post.category || "Other", quantity });
    }

    return items;
  }, []);

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            Good to see you
          </p>
          <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Your relief overview
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            A quick view of the supplies and requests moving through your
            community.
          </p>
        </div>
        <Button
          asChild
          className="rounded-full px-5 shadow-lg shadow-secondary/20"
        >
          <Link to="/dashboard/create-supply">
            <Plus className="mr-2 size-4" /> Add supply
          </Link>
        </Button>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-[#12251c] p-5 text-white shadow-xl shadow-[#12251c]/10">
          <div className="mb-8 flex items-center justify-between">
            <span className="rounded-xl bg-white/10 p-2">
              <Package className="size-5 text-secondary" />
            </span>
            <span className="text-xs text-white/50">Live total</span>
          </div>
          <p className="text-3xl font-black">
            {isLoading ? "--" : posts.length}
          </p>
          <p className="mt-1 text-sm text-white/60">Supply posts</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-8 flex items-center justify-between">
            <span className="rounded-xl bg-[#e7f5e8] p-2">
              <TrendingUp className="size-5 text-primary" />
            </span>
            <span className="text-xs text-slate-400">Across all posts</span>
          </div>
          <p className="text-3xl font-black text-slate-950">
            {isLoading ? "--" : totalQuantity.toLocaleString()}
          </p>
          <p className="mt-1 text-sm text-slate-500">Items available</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-8 flex items-center justify-between">
            <span className="rounded-xl bg-[#fff3dc] p-2">
              <HeartHandshake className="size-5 text-secondary" />
            </span>
            <span className="text-xs text-slate-400">Organized by need</span>
          </div>
          <p className="text-3xl font-black text-slate-950">
            {isLoading ? "--" : categories.size}
          </p>
          <p className="mt-1 text-sm text-slate-500">Active categories</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-8 flex items-center justify-between">
            <span className="rounded-xl bg-[#e6f0ff] p-2 text-blue-600">
              <span className="text-lg font-black">%</span>
            </span>
            <span className="text-xs text-slate-400">Community pulse</span>
          </div>
          <p className="text-3xl font-black text-slate-950">Ready</p>
          <p className="mt-1 text-sm text-slate-500">
            For your next contribution
          </p>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Supply distribution
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Items grouped by category
              </p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
              Overview
            </span>
          </div>
          <div className="mt-4 h-[290px]">
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="quantity"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={72}
                    outerRadius={105}
                    paddingAngle={4}
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={entry.name}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value} items`, "Quantity"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="grid h-full place-items-center text-sm text-slate-400">
                No supply data yet.
              </div>
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {chartData.map((item, index) => (
              <span
                key={item.name}
                className="flex items-center gap-2 text-xs font-semibold text-slate-500"
              >
                <i
                  className="size-2 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="mb-5 flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Recent requests
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Latest community supply posts
              </p>
            </div>
            <Link
              className="text-sm font-bold text-primary hover:underline"
              to="/dashboard/supplies"
            >
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {posts.slice(0, 4).map((post) => (
              <div
                key={post._id}
                className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3"
              >
                <img
                  src={post.image}
                  alt=""
                  className="size-12 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-800">
                    {post.title}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {post.category}{" "}
                    <span className="mx-1 text-slate-300">/</span>{" "}
                    {post.quantity}
                  </p>
                </div>
                <span className="size-2 rounded-full bg-primary" />
              </div>
            ))}
            {!isLoading && posts.length === 0 && (
              <p className="rounded-2xl bg-slate-50 p-5 text-sm text-slate-500">
                No requests have been added yet.
              </p>
            )}
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-6 w-full rounded-full"
          >
            <Link to="/dashboard/supplies">Manage supply posts</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
