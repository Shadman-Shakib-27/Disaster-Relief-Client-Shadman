import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import image from "../../../assets/Images/donate.jpg";
import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0.5, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};
const child = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1 },
};

const Volunteer = () => {
  return (
    <Container className="flex flex-col lg:flex-row justify-between gap-5 my-16 mb-24 items-center">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.4, ease: "easeInOut", staggerChildren: 0.3 }}
        className="flex flex-col w-full lg:w-1/2 pt-12 mx-auto items-center lg:items-start gap-4 pr-4"
      >
        <motion.p variants={child} className="text-secondary text-lg lg:text-xl text-center lg:text-left">
          Volunteer in Action
        </motion.p>
        <motion.h1
          variants={child}
          className="text-[#191F28] text-2xl lg:text-5xl font-bold pb-2 text-center lg:text-left"
        >
          A Little Help Can Make <br /> A Big Change.
        </motion.h1>
        <motion.p variants={child} className="text-center max-w-[60ch] lg:text-left">
        At Disaster Relief Donation Platform , we believe that together, we can make a difference. Join us in our mission to provide hope, support, and opportunity to those who need it most.let's build a brighter, more resilient future for all.
        </motion.p>
        <Button className="mt-4 text-base lg:text-lg px-8 lg:px-10 py-4 lg:py-6">Donate Now!</Button>
      </motion.div>
      <motion.div
        initial={{ x: 200, scale: 0.4 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.4,
        }}
        className="w-full lg:w-1/2"
      >
        <img className="rounded-lg w-full" src={image} alt="Donate now!" />
      </motion.div>
    </Container>
  );
};

export default Volunteer;
