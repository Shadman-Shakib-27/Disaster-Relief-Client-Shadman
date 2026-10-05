import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { uploadImage } from "@/lib/imageUpload";
import {
  useGetSinglePostQuery,
  useUpdatePostMutation,
} from "@/redux/features/posts/postApi";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

type PostFormValues = {
  title: string;
  quantity: string;
  description: string;
  image?: FileList;
};

const categories = ["Food", "Hygiene Products", "Medical Essentials"];

const UpdatedPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, isLoading: isPostLoading } = useGetSinglePostQuery(id, {
    skip: !id,
  });
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();
  const [category, setCategory] = useState("");
  const { register, reset, handleSubmit } = useForm<PostFormValues>();

  useEffect(() => {
    if (post) {
      setCategory(post.category ?? "");
      reset({
        title: post.title ?? "",
        quantity: post.quantity ?? "",
        description: post.description ?? "",
      });
    }
  }, [post, reset]);

  const onSubmit: SubmitHandler<PostFormValues> = async (values) => {
    if (!id || !category) {
      toast.error("Please select a category.");
      return;
    }

    try {
      const image = values.image?.[0]
        ? await uploadImage(values.image[0])
        : post?.image;

      await updatePost({
        id,
        title: values.title,
        quantity: values.quantity,
        description: values.description,
        category,
        image,
      }).unwrap();
      toast.success("Post has been updated.");
      navigate("/dashboard/supplies");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not update post.",
      );
    }
  };

  if (isPostLoading) {
    return <p className="p-12 text-center">Loading post...</p>;
  }

  return (
    <div className="p-4 md:p-12">
      <form
        className="mx-auto space-y-5 rounded-sm border p-4 shadow-sm lg:w-3/4 lg:p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-3 text-center text-4xl font-semibold text-secondary">
          Update <span className="text-primary">Post</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xl" htmlFor="title">
              Title
            </label>
            <Input id="title" {...register("title", { required: true })} />
          </div>
          <div className="space-y-2">
            <label className="text-xl" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">Select Category</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xl" htmlFor="quantity">
              Quantity
            </label>
            <Input
              id="quantity"
              {...register("quantity", { required: true })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xl" htmlFor="image">
              Replace image
            </label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              {...register("image")}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xl" htmlFor="description">
            Description
          </label>
          <Textarea
            id="description"
            {...register("description", { required: true })}
          />
        </div>
        <Button type="submit" disabled={isUpdating}>
          {isUpdating ? "Updating..." : "Update Post"}
        </Button>
      </form>
    </div>
  );
};

export default UpdatedPost;
