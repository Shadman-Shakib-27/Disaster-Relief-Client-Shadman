import useScrollGrow from "@/hooks/ScrollGrowHook";
import { TSectionTitle } from "@/types/sectionTitle.type";
import { motion } from "framer-motion";

const SectionTitle = ({ fTitle, lTitle, description }: TSectionTitle) => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="w-[60%] pb-12 mx-auto flex flex-col justify-center items-center text-center gap-4"
    >
      <h1 className="font-bold text-4xl text-secondary ">
        <span className="text-primary">{fTitle}</span> {lTitle}
      </h1>
      <p className="text-[18px]">{description}</p>
    </motion.div>
  );
};

export default SectionTitle;
