import { AuthContext } from "@/Provider/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  useCreateDonationMutation,
  useGetSinglePostQuery,
} from "@/redux/features/posts/postApi";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

type DonationFormValues = {
  amount: number;
  message: string;
};

const Donation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, isLoading: isPostLoading } = useGetSinglePostQuery(id, {
    skip: !id,
  });
  const [createDonation, { isLoading }] = useCreateDonationMutation();
  // @ts-ignore AuthContext is currently untyped in the existing app.
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<DonationFormValues>();

  const onSubmit: SubmitHandler<DonationFormValues> = async (values) => {
    if (!user) {
      navigate("/login", { state: { from: { pathname: `/donate/${id}` } } });
      return;
    }

    try {
      await createDonation({
        postId: id,
        amount: Number(values.amount),
        message: values.message,
      }).unwrap();
      toast.success("Donation submitted successfully.");
      navigate(`/view-details/${id}`);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not submit donation.",
      );
    }
  };

  if (isPostLoading) {
    return <p className="p-12 text-center">Loading donation details...</p>;
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="rounded-lg border p-6 shadow-sm md:p-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-secondary">
          Support this request
        </p>
        <h1 className="mb-2 text-3xl font-bold text-primary">
          Donate to {post?.title}
        </h1>
        <p className="mb-8 text-slate-600">
          Your contribution will be recorded against this relief request.
        </p>
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <label htmlFor="amount" className="font-semibold">
              Donation amount
            </label>
            <Input
              id="amount"
              type="number"
              min="1"
              step="0.01"
              placeholder="Enter amount"
              {...register("amount", {
                required: true,
                min: 1,
                valueAsNumber: true,
              })}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="font-semibold">
              Message (optional)
            </label>
            <Textarea
              id="message"
              placeholder="Add a note for the relief team"
              {...register("message")}
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit" disabled={isLoading} className="sm:flex-1">
              {isLoading ? "Submitting..." : "Confirm donation"}
            </Button>
            <Button
              asChild
              type="button"
              variant="outline"
              className="sm:flex-1"
            >
              <Link to={`/view-details/${id}`}>Cancel</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donation;
