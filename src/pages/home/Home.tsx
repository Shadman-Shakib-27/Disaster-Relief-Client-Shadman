import Hero from "@/pages/home/Hero";
import SuppliesPost from "./posts/SuppliesPost";
import Gallery from "./Gallery ";
import About from "./About/About";
import Volunteer from "./Volunteer/Volunteer";
import HelpingHand from "./halpingHand/HanpingHand";
import Testimonial from "./Testemonial";

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
