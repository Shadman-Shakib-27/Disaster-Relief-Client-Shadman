import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { useGetAllPostQuery } from "@/redux/feathers/posts/postApi";
import { TPosts } from "@/types";
import PostCard from "./PostCard";

const AllPost = () => {
  const { data } = useGetAllPostQuery(undefined);
  return (
    <Container className="my-12">
      <SectionTitle
        fTitle="Our All "
        lTitle="Supply Post"
        description="At Disaster Relief Donation Platform , we believe that together, we can make a difference. Join us in our mission to provide hope, support, and opportunity to those who need it most.let's build a brighter, more resilient future for all."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.map((item: TPosts) => (
          <PostCard item={item} />
        ))}
      </div>
    </Container>
  );
};

export default AllPost;
