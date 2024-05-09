import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { useGetSinglePostQuery } from "@/redux/feathers/posts/postApi";
import { Link, useParams } from "react-router-dom";

const ViewDetails = () => {
  // const data: TPosts = useLoaderData();

  const { id } = useParams();
  const { data } = useGetSinglePostQuery(id);

  return (
    <Container className="my-16">
      <SectionTitle
        fTitle="All About"
        lTitle="This Supply Post"
        description="At Disaster Relief Donation Platform , we believe that together, we can make a difference. Join us in our mission to provide hope, support, and opportunity to those who need it most.let's build a brighter, more resilient future for all."
      />

      <div className="flex flex-col lg:flex-row gap-8">
        <img
          className="w-1/2 h-[400px] rounded-md shadow-md hover:scale-105 hover:shadow-2xl transition-all "
          src={data?.image}
          alt="Post image"
        />
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Title: {data?.title}</h1>
          <h1 className=" font-medium">
            Category: <span className="font-semibold">{data?.category}</span>
          </h1>
          <h1 className=" font-medium">
            Quantity: <span className="font-semibold">{data?.quantity}</span>
          </h1>
          <h1 className=" font-medium">
            Manufacturer:
            <span className="font-semibold">{data?.manufacturer}</span>
          </h1>
          <h1 className=" font-medium">
            Price: <span className="font-semibold">{data?.price_per_unit}</span>
          </h1>
          <h1 className=" font-medium">
            Expiration Date:
            <span className="font-semibold">{data?.expiration_date}</span>
          </h1>
          <p className="text-lg pb-6">{data?.description}</p>
          <Link to="/dashboard/create-supply">
            <Button className="text-xl py-6 px-10 ">Donate Now</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ViewDetails;
