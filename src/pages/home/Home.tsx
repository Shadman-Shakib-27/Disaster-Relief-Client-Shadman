import Hero from "@/pages/home/Hero";
import SuppliesPost from "./posts/SuppliesPost";
import Gallery from "./Gallery ";
import About from "./About/About";
import Volunteer from "./Volunteer/Volunteer";
import HelpingHand from "./HelpingHand/HelpingHand";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <SuppliesPost />
      <Gallery />
      <About />
      <Testimonial/>
      <HelpingHand />
      <Volunteer />
    </div>
  );
};

export default Home;
