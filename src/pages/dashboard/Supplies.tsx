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
} from "@/redux/feathers/posts/postApi";
import { TPosts } from "@/types";
import { Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Supplies = () => {
  const posts = useGetAllPostQuery(undefined, {});
  const [removePost, { isSuccess }] = useRemovePostMutation();
  const handleRemove = (id: any) => {
    removePost(id);
    if (isSuccess) {
      toast.success("post is deleted");
    }
  };

  return (
    <div className="p-4 border-1 shadow-md">
      <div className="my-4 flex justify-end gap-5 mr-12">
        <Link to="/">
          <Button className="text-xl py-6 px-8 bg-primary text-white">
            Go To Home
          </Button>
        </Link>
        <Link to="/dashboard/create-supply">
          <Button className="text-xl py-6 px-8 bg-primary text-white">
            Add Supply
          </Button>
        </Link>
      </div>
      <Table className="p-3">
        <TableHeader>
          <TableRow className="text-lg">
            <TableHead className=" pr-0">Serial</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="">Edit</TableHead>
            <TableHead className="">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts?.data?.map((post: TPosts, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <img className="w-16 h-12 rounded-sm" src={post.image} alt="" />
              </TableCell>
              <TableCell className="text-lg">{post?.title}</TableCell>
              <TableCell className="text-lg">{post?.category}</TableCell>
              <TableCell className="text-lg">{post?.quantity}</TableCell>
              <TableCell>
                <Edit className="size-8 bg-blue-600 text-white p-2 rounded-sm " />
              </TableCell>
              <TableCell>
                <Trash2
                  onClick={() => handleRemove(post._id)}
                  className="size-8 bg-red-600 text-white p-2 rounded-sm ml-3"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Supplies;
