import { Button } from "@/components/ui/button";
import { TPosts } from "@/types";
import { Link } from "react-router-dom";

const PostCard = ({ item }: TPosts) => {
  return (
    <div
      className="shadow-md border group rounded-md flex flex-col justify-center items-start space-y-4 p-4"
      key={item._id}
    >
      <img
        className="rounded-sm border shadow-sm p-1 group-hover:scale-90 transition-transform duration-300 transform origin-center"
        src={item.image}
      />

      <div>
        <h1 className="text-xl font-semibold">Title: {item.title}</h1>
        <h1 className=" font-medium">
          Category: <span className="font-semibold">{item.category}</span>
        </h1>
        <h1 className=" font-medium">
          Quantity: <span className="font-semibold">{item.quantity}</span>
        </h1>
      </div>

      <Button className="w-full">
        <Link to={`/view-details/${item._id}`}>View Detail</Link>
      </Button>
    </div>
  );
};

export default PostCard;
