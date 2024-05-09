import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import image from "../../assets/Images/Hero.webp";

import { motion } from "framer-motion";

const Hero = () => {
  const intro = {
    hidden: { opacity: 0.5, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const introChildren = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div className="setBgImage bg-dark-gray h-screen flex justify-center items-center mb-8">
      <Container className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            variants={intro}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              staggerChildren: 0.8,
            }}
            className="flex justify-center items-center"
          >
            <motion.div
              variants={introChildren}
              className="space-y-8 mx-4 lg:mx-0 mt-[60px] lg:mt-0"
            >
              <motion.h1
                variants={introChildren}
                className="lg:text-5xl ml-10 lg:ml-0 text-[30px] leading-tight font-extrabold"
              >
                Join Hands for Hope Post-Disaster Relief Donation Platform !
              </motion.h1>
              <motion.p
                variants={introChildren}
                className="text-xl text-justify max-w-[45ch]"
              >
                In the aftermath of disasters, our platform serves as a beacon
                of hope. Donate funds and essential supplies directly to
                impacted regions. Track the impact of your contributions in
                real-time. Together, let's rebuild and restore communities.
              </motion.p>
              <motion.div variants={introChildren} className="space-x-4">
                <Button className="px-12 font-semibold text-lg py-6 shadow-xl">
                  Features
                </Button>
                <Button
                  variant="outline"
                  className="px-12 font-semibold text-lg py-6 shadow-xl"
                >
                  Benefits
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 200, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
              type: "spring",
              duration: 2,
            }}
            className="relative"
          >
            <img
              className="lg:h-[504px] lg:w-[806px] h-[300px] mb-8 lg:mb-0 rounded-sm"
              src={image}
              alt="Hero Image"
            />
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Hero;
