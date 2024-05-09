import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreatePostMutation } from "@/redux/feathers/posts/postApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const UpdatedPost = () => {
  const [addPost, { isSuccess }] = useCreatePostMutation();

  const [category, setCategory] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const image_hosting_url =
    "https://api.imgbb.com/1/upload?key=4696fab4ef7dc4eb76f5a91e525f6d32";

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageRes) => {
        if (imageRes.success) {
          const imgURL = imageRes.data.display_url;
          const { title, description, quantity } = data;
          const newItem = {
            title,
            category: category,
            quantity,
            description,
            image: imgURL,
          };
          console.log(newItem);
          addPost(newItem);
          if (isSuccess) {
            toast.success("Post Has Been Updated");
          }
        }
      });
  };

  return (
    <div className="p-12">
      <form
        className="space-y-5 lg:w-3/4 mx-auto border shadow-sm  rounded-sm p-4 lg:p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-secondary text-4xl font-semibold text-center mb-3">
          Create <span className="text-primary">Post</span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xl">Title</label>
            <Input
              id="title"
              placeholder="Title"
              {...register("title", { required: true })}
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

            {errors.items && (
              <span className="text-sm text-red-400">Category is Required</span>
            )}
          </div>
          <div className="space-y-2 ">
            <label className="text-xl">Quantity</label>
            <Input
              id="quantity"
              placeholder="Quantity (Number)"
              {...register("quantity")}
            />
            {errors.items && (
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

        <Button>Create Post</Button>
      </form>
    </div>
  );
};

export default UpdatedPost;
