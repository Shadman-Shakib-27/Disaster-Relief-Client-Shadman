import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetAllPostQuery,
  useRemovePostMutation,
} from "@/redux/features/posts/postApi";

import { TPosts } from "@/types";
import { ArrowLeft, Edit, PackagePlus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Supplies = () => {
  const { data, isLoading, isError } = useGetAllPostQuery(undefined, {});
  const [removePost, { isLoading: isDeleting }] = useRemovePostMutation();

  const handleRemove = async (id: string) => {
    try {
      await removePost(id).unwrap();
      toast.success("Post is deleted successfully.");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not delete post.",
      );
    }
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            Inventory workspace
          </p>
          <h1 className="text-3xl font-black tracking-tight text-slate-950">
            Supply posts
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Manage the requests and resources shared with your community.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/">
              <ArrowLeft className="mr-2 size-4" /> Home
            </Link>
          </Button>
          <Button
            asChild
            className="rounded-full px-5 shadow-lg shadow-secondary/20"
          >
            <Link to="/dashboard/create-supply">
              <PackagePlus className="mr-2 size-4" /> Add supply
            </Link>
          </Button>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
          <div>
            <h2 className="font-bold text-slate-950">All requests</h2>
            <p className="text-xs text-slate-500">
              {data?.length ?? 0} posts in your workspace
            </p>
          </div>
          <span className="rounded-full bg-[#e7f5e8] px-3 py-1 text-xs font-bold text-primary">
            Active
          </span>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50 hover:bg-slate-50">
                <TableHead className="pl-6">Supply</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="h-32 text-center text-sm text-slate-500"
                  >
                    Loading supply posts...
                  </TableCell>
                </TableRow>
              )}
              {isError && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="h-32 text-center text-sm text-red-500"
                  >
                    Could not load supply posts.
                  </TableCell>
                </TableRow>
              )}
              {!isLoading &&
                !isError &&
                data?.map((post: TPosts) => (
                  <TableRow key={post._id} className="group">
                    <TableCell className="pl-6">
                      <div className="flex min-w-[230px] items-center gap-3">
                        <img
                          className="size-12 rounded-xl object-cover ring-1 ring-slate-200"
                          src={post.image}
                          alt={post.title}
                        />
                        <div>
                          <p className="font-bold text-slate-800">
                            {post.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            Relief request
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {post.category}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="font-bold text-slate-800">
                        {post.quantity}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          asChild
                          size="icon"
                          variant="outline"
                          className="rounded-xl"
                          aria-label={`Edit ${post.title}`}
                        >
                          <Link to={`/dashboard/update-supply/${post._id}`}>
                            <Edit className="size-4" />
                          </Link>
                        </Button>
                        <Button
                          size="icon"
                          disabled={isDeleting}
                          onClick={() => handleRemove(post._id)}
                          className="rounded-xl bg-red-50 text-red-600 hover:bg-red-100"
                          aria-label={`Delete ${post.title}`}
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              {!isLoading && !isError && data?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="h-40 text-center">
                    <p className="font-semibold text-slate-700">
                      No supply posts yet
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Create your first request to get started.
                    </p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Supplies;
