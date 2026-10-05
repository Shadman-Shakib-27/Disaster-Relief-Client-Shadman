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
import { ArrowLeft, FileImage, UploadCloud } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
    <div className="mx-auto max-w-5xl">
      <form
        className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-between gap-4 border-b border-slate-100 bg-[#12251c] px-5 py-6 text-white sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              New contribution
            </p>
            <h1 className="text-2xl font-black">Create supply post</h1>
            <p className="mt-1 text-sm text-white/60">
              Share what your community needs right now.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="w-fit rounded-full border-white/20 bg-white/10 text-white hover:bg-white hover:text-slate-900"
          >
            <Link to="/dashboard/supplies">
              <ArrowLeft className="mr-2 size-4" /> Back to posts
            </Link>
          </Button>
        </div>
        <div className="space-y-7 p-5 sm:p-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label
                className="text-sm font-bold text-slate-700"
                htmlFor="title"
              >
                Supply title
              </label>
              <Input
                id="title"
                className="h-12 rounded-xl bg-slate-50"
                placeholder="e.g. Emergency food kits"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && (
                <span className="text-xs text-red-500">Title is required</span>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">
                Category
              </label>
              <Select onValueChange={(value) => setCategory(value)}>
                <SelectTrigger className="h-12 rounded-xl bg-slate-50">
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
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-bold text-slate-700"
                htmlFor="quantity"
              >
                Quantity
              </label>
              <Input
                id="quantity"
                className="h-12 rounded-xl bg-slate-50"
                placeholder="e.g. 250 kits"
                {...register("quantity", { required: "Quantity is required" })}
              />
              {errors.quantity && (
                <span className="text-xs text-red-500">
                  Quantity is required
                </span>
              )}
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-bold text-slate-700"
                htmlFor="image"
              >
                Cover image
              </label>
              <div className="relative flex h-12 items-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3">
                <FileImage className="mr-2 size-4 text-primary" />
                <Input
                  id="image"
                  className="border-0 bg-transparent p-0 shadow-none"
                  type="file"
                  accept="image/*"
                  {...register("image")}
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-bold text-slate-700"
              htmlFor="description"
            >
              Description
            </label>
            <Textarea
              className="min-h-36 rounded-xl bg-slate-50"
              id="description"
              placeholder="Describe who needs this supply and any useful delivery details..."
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <span className="text-xs text-red-500">
                Description is required
              </span>
            )}
          </div>
          <div className="flex flex-col justify-between gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
            <p className="text-xs leading-5 text-slate-400">
              Your post will be visible to the relief community after
              publishing.
            </p>
            <Button
              type="submit"
              disabled={isLoading}
              className="rounded-full px-6"
            >
              <UploadCloud className="mr-2 size-4" />
              {isLoading ? "Publishing..." : "Publish supply post"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
