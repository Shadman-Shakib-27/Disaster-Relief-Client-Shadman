import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { useGetSinglePostQuery } from "@/redux/feathers/posts/postApi";
import { Link, useParams } from "react-router-dom";

const ViewDetails = () => {
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
          className="w-full lg:w-1/2 h-auto lg:h-[400px] rounded-md shadow-md hover:scale-105 hover:shadow-2xl transition-all"
          src={data?.image}
          alt="Post image"
        />
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-xl font-semibold">
            <span className="font-bold">Title: </span> {data?.title}
          </h1>
          <h1 className="font-medium">
            <span className="font-bold"> Category: </span>
            <span className="font-semibold">{data?.category}</span>
          </h1>
          <h1 className="font-medium">
            <span className="font-bold"> Quantity: </span>
            <span className="font-semibold">{data?.quantity}</span>
          </h1>
          <h1 className="font-medium">
            <span className="font-bold"> Manufacturer: </span>
            <span className="font-semibold">{data?.manufacturer}</span>
          </h1>
          <h1 className="font-medium">
            <span className="font-bold"> Price: </span>
            <span className="font-semibold">{data?.price_per_unit}</span>
          </h1>
          <h1 className="font-medium">
            <span className="font-bold"> Expiration Date: </span>
            <span className="font-semibold">{data?.expiration_date}</span>
          </h1>
          <h1 className="font-medium">
            <span className="font-bold"> Description: </span>
            <span className="text-lg pb-6">{data?.description}</span>
          </h1>

          <Link to="/dashboard/create-supply">
            <Button className="text-xl w-full py-6 mt-4 px-10">
              Donate Now
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ViewDetails;
