import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import image1 from "../../../assets/Images/About1.jpg";
import image2 from "../../../assets/Images/1.avif";
import image3 from "../../../assets/Images/About2.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", bounce: 0.5 },
  },
};

const About = () => {
  return (
    <Container className="my-12">
      <SectionTitle
        fTitle="About"
        lTitle="Us"
        description="At Disaster Relief Donation Platform , we believe that together, we can make a difference. Join us in our mission to provide hope, support, and opportunity to those who need it most.let's build a brighter, more resilient future for all."
      />
      <motion.div
        variants={intro}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, staggerChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <motion.div variants={introChildren} className="border shadow-sm">
          <img className="w-full rounded-sm  h-[300px]" src={image1} alt="" />
          <div className="p-3 space-y-3">
            <h1 className="text-lg font-semibold">Our Impact To Society</h1>
            <p className="text-justify">
              Highlight the tangible impact your Post-Disaster Relief Donation
              Platform has made on communities around the world. Share
              statistics, success stories, and testimonials that illustrate the
              difference your platform has made in providing essential
              resources, rebuilding infrastructure, and empowering local
              communities to recover and thrive after disasters. This topic
              showcases the effectiveness and significance of your
              organization's efforts in making a positive difference in the
              world.
            </p>
            <Button className="w-full"> Learn More</Button>
          </div>
        </motion.div>
        <motion.div variants={introChildren} className="border shadow-sm">
          <img className="w-full rounded-sm  h-[300px]" src={image2} alt="" />
          <div className="p-3 space-y-3">
            <h1 className="text-lg font-semibold">Sustainability Focus</h1>
            <p className="text-justify">
              Highlight the tangible impact your Post-Disaster Relief Donation
              Platform has made on communities around the world. Share
              statistics, success stories, and testimonials that illustrate the
              difference your platform has made in providing essential
              resources, rebuilding infrastructure, and empowering local
              communities to recover and thrive after disasters. This topic
              showcases the effectiveness and significance of your
              organization's efforts in making a positive difference in the
              world.
            </p>
            <Button className="w-full"> Learn More</Button>
          </div>
        </motion.div>
        <motion.div variants={introChildren} className="border shadow-sm">
          <img className="w-full rounded-sm h-[300px]" src={image3} alt="" />
          <div className="p-3 space-y-3">
            <h1 className="text-lg font-semibold">Equitable Access</h1>
            <p className="text-justify">
              Highlight the tangible impact your Post-Disaster Relief Donation
              Platform has made on communities around the world. Share
              statistics, success stories, and testimonials that illustrate the
              difference your platform has made in providing essential
              resources, rebuilding infrastructure, and empowering local
              communities to recover and thrive after disasters. This topic
              showcases the effectiveness and significance of your
              organization's efforts in making a positive difference in the
              world.
            </p>
            <Button className="w-full"> Learn More</Button>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default About;
