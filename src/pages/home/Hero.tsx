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
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
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
              className="space-y-8 px-4 md:mt-0"
            >
              <motion.h1
                variants={introChildren}
                className="text-3xl md:text-3xl lg:text-5xl font-extrabold leading-tight text-center md:text-left"
              >
                Join Hands for Hope Post-Disaster Relief Donation Platform!
              </motion.h1>
              <motion.p
                variants={introChildren}
                className="text-base md:text-lg lg:text-xl text-justify max-w-[45ch] mx-auto md:mx-0"
              >
                In the aftermath of disasters, our platform serves as a beacon
                of hope. Donate funds and essential supplies directly to
                impacted regions. Track the impact of your contributions in
                real-time. Together, let's rebuild and restore communities.
              </motion.p>
              <motion.div
                variants={introChildren}
                className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start"
              >
                <Button className="px-8 md:px-12 py-4 md:py-6 font-semibold text-lg shadow-xl">
                  Features
                </Button>
                <Button
                  variant="outline"
                  className="px-8 md:px-12 py-4 md:py-6 font-semibold text-lg shadow-xl"
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
            className="relative flex justify-center"
          >
            <img
              className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-sm"
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
