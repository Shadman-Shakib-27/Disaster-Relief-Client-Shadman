import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { uploadImage } from "@/lib/imageUpload";
import { useCreatePostMutation } from "@/redux/features/posts/postApi";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type PostFormValues = {
  title: string;
  quantity: string;
  description: string;
  image: FileList;
};

const CreatePost = () => {
  const [addPost, { isLoading }] = useCreatePostMutation();

  const [category, setCategory] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormValues>();

  const onSubmit: SubmitHandler<PostFormValues> = async (data) => {
    if (!category) {
      toast.error("Please select a category.");
      return;
    }

    if (!data.image?.[0]) {
      toast.error("Please select an image.");
      return;
    }

    try {
      const image = await uploadImage(data.image[0]);
      await addPost({ ...data, category, image }).unwrap();
      toast.success("Post has been created.");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not create post.",
      );
    }
  };

  return (
    <div className="p-4 md:p-12">
      <form
        className="space-y-5 lg:w-3/4 mx-auto border shadow-sm  rounded-sm p-4 lg:p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-secondary text-4xl font-semibold text-center mb-3">
          Create <span className="text-primary">Post</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xl">Title</label>
            <Input
              id="title"
              placeholder="Title"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <span className="text-sm text-red-400">Title is Required</span>
            )}
          </div>
          <div className="space-y-2 ">
            <label className="text-xl">Category</label>
            <Select onValueChange={(value) => setCategory(value)}>
              <SelectTrigger className="w-">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Food">Food</SelectItem>
                  <SelectItem value="Hygiene Products">
                    Hygiene Products
                  </SelectItem>
                  <SelectItem value="Medical Essentials">
                    Medical Essentials
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {!category && (
              <span className="text-sm text-red-400">Category is Required</span>
            )}
          </div>
          <div className="space-y-2 ">
            <label className="text-xl">Quantity</label>
            <Input
              id="quantity"
              placeholder="Quantity (Number)"
              {...register("quantity", { required: "Quantity is required" })}
            />
            {errors.quantity && (
              <span className="text-sm text-red-400">Quantity is Required</span>
            )}
          </div>
          <div className="space-y-2 ">
            <label className="text-xl">Image</label>
            <Input id="image" type="file" {...register("image")} />
          </div>
        </div>
        <div className="space-y-2 ">
          <label className="text-xl">Description</label>
          <Textarea id="description" {...register("description")} />
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Post"}
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;
