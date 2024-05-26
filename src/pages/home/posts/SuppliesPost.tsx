import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { TPosts } from "@/types";
import PostCard from "./PostCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { NavLink } from "react-router-dom";
import { useGetAllPostQuery } from "@/redux/features/posts/postApi";

const SuppliesPost = () => {
  const { data } = useGetAllPostQuery(undefined);

  return (
    <Container className="my-12">
      <SectionTitle
        fTitle="Our"
        lTitle="Mission"
        description="At Disaster Relief Donation Platform, we are dedicated to providing immediate relief and long-term support to communities affected by natural disasters worldwide."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.slice(0, 6).map((item: TPosts) => (
          //@ts-ignore
          <PostCard item={item} key={item._id} />
        ))}
      </div>
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        className="flex items-center justify-center my-6"
      >
        <NavLink to="/supplies">
          <Button className="bg-primary hover:bg-secondary text-white py-6 px-10 text-lg">
            View All
          </Button>
        </NavLink>
      </div>
    </Container>
  );
};

export default SuppliesPost;
