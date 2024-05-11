import Container from "@/components/shared/Container";
import CounterScroller from "@/components/shared/CounterScroller";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const HelpingHand = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.4 1"],
  });
  return (
    <motion.div className="bg-slate-50 pb-12">
      <Container className="setBgImageHelpHand h-full mt-12 lg:mt-24 px-4 lg:px-0">
        <motion.div
          style={{
            scale: scrollYProgress,
          }}
          ref={componentRef}
          className="flex flex-col w-full lg:w-3/4 pt-12 mx-auto items-center justify-center gap-4"
        >
          <p className="text-secondary text-lg lg:text-xl">Hope at a Glance</p>
          <h1 className="text-[#191F28] text-2xl lg:text-5xl font-bold pb-2 text-center lg:text-left">
            Have A Helping Hand For Hope.
          </h1>
          <p className="text-center lg:text-left">
            At Disaster Relief Platform, we are dedicated to providing
            immediate relief and long-term support to communities worldwide.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-around pt- lg:pt-10">
          <CounterBlock value={629} unit="M" label="We've Helped Raise" />
          <CounterBlock value={79} unit="K+" label="Projects Funded" />
          <CounterBlock value={13} unit="M+" label="People Will Be Served" />
          <CounterBlock value={124} unit="+" label="Countries" />
        </div>
      </Container>
    </motion.div>
  );
};

 //@ts-ignore
const CounterBlock = ({ value, unit, label }) => (
  <div className="text-4xl lg:text-5xl font-bold flex flex-col items-center lg:items-start">
    <div className="flex items-center">
      <h1 className="text-primary">$</h1>
      <CounterScroller start={1} end={value} />
      <h1 className="text-secondary">{unit}</h1>
    </div>
    <h1 className="text-center lg:text-left text-base lg:text-xl text-secondary -mt-1">
      {label}
    </h1>
  </div>
);

export default HelpingHand;
