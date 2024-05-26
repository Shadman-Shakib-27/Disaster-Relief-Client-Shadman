import { Button } from "@/components/ui/button";
import { TPosts } from "@/types";
import { Link } from "react-router-dom";

// @ts-ignore
const PostCard = ({ item }: TPosts) => {
  return (
    <div
      className="shadow-md border group rounded-md flex flex-col justify-between items-start p-4 relative"
      key={item._id}
    >
      <div className="flex-grow relative">
        <img
          className="rounded-sm border shadow-sm p-1 group-hover:scale-90 transition-transform duration-300 transform origin-center w-full h-full object-cover"
          src={item.image}
          alt={item.title}
        />
      </div>

      <div className="flex flex-col space-y-2">
        <h1 className="text-xl font-semibold">Title: {item.title}</h1>
        <h1 className="font-medium">
          Category: <span className="font-semibold">{item.category}</span>
        </h1>
        <h1 className="font-medium">
          Quantity: <span className="font-semibold">{item.quantity}</span>
        </h1>
      </div>

      <Button className="mt-6 bottom-4 left-4 w-full">
        <Link to={`/view-details/${item._id}`}>View Detail</Link>
      </Button>
    </div>
  );
};

export default PostCard;
