import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Container from "@/components/shared/Container";
import image from "../../assets/Images/Invisible.png";
import SectionTitle from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";
import useScrollGrow from "@/hooks/ScrollGrowHook";

const Testimonial = () => {
  const { style, componentRef } = useScrollGrow();
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "free-snap",
    slides: { perView: 3, spacing: 25 },
  });

  return (
    <Container className="my-16">
      <SectionTitle
        fTitle="What People Say"
        lTitle="About Us"
        description="At Disaster Relief Donation Platform , we believe that together, we can make a difference. Join us in our mission to provide hope, support, and opportunity to those who need it most.let's build a brighter, more resilient future for all."
      />
      <motion.div ref={ref} className="keen-slider">
        <motion.div
          style={style}
          ref={componentRef}
          className="keen-slider__slide number-slide1"
        >
          <div className="p-8 rounded-xl bg-[#FFF9EE] space-y-5 h-[350px]">
            <div className="lg:flex w-fit h-fit gap-3">
              <img src={image} alt="" />
              <div>
                <h1 className="text-[#061C3D] text-xl font-medium">
                  Annette Black
                </h1>
                <p className="text-primary">
                  Chief Chairman of{" "}
                  <span className="text-secondary text-lg">Bigpage</span>
                </p>
              </div>
            </div>
            <p className="text-[#061C3D]">
              “Golio is one of the BEST web designers I've ever worked with
              professionally. I am a repeat customer who continues to work with
              Shadman because of his talent/skills, great customer service, work
              ethic, and attention to detail. ”
            </p>
            <div className="pt-4">
              <p className="text-lg flex gap-5 items-center">
                <span className="font-bold text-secondary">Donate: </span>
                <div className="flex flex-col">
                  <span className="font-medium">From 2021-present</span>
                  <span className="text-lg font-medium">
                    $3,50,000 per year
                  </span>
                </div>
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          style={style}
          ref={componentRef}
          className="keen-slider__slide number-slide2"
        >
          <div className="p-8 rounded-xl bg-[#E7F5E8] space-y-5 h-[350px]">
            <div className="lg:flex w-fit h-fit gap-3">
              <img src={image} alt="" />
              <div>
                <h1 className="text-[#061C3D] text-xl font-medium">
                  Annette Black
                </h1>
                <p className="text-primary">
                  Chief Chairman of{" "}
                  <span className="text-secondary text-lg">Adblast</span>
                </p>
              </div>
            </div>
            <p className="text-[#061C3D]">
              “This guy is true professional and very experienced in migration
              and server configuration. He was able to complete my order in time
              and as per agreed scope. Highly recommend!”
            </p>
            <div className="pt-4">
              <p className="text-lg flex gap-5 items-center">
                <span className="font-bold text-secondary">Donate: </span>
                <div className="flex flex-col">
                  <span className="font-medium">From 2019-23</span>
                  <span className="text-lg font-medium">
                    $50,000 per months
                  </span>
                </div>
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          style={style}
          ref={componentRef}
          className="keen-slider__slide number-slide3"
        >
          <div className="p-8 rounded-xl bg-[#F5F6F7] space-y-5 h-[350px]">
            <div className="lg:flex w-fit h-fit gap-3">
              <img src={image} alt="" />
              <div>
                <h1 className="text-[#061C3D] text-xl font-medium">
                  Annette Black
                </h1>
                <p className="text-primary">
                  Chief Chairman of{" "}
                  <span className="text-secondary text-lg">Velors</span>
                </p>
              </div>
            </div>
            <p className="text-[#061C3D]">
              “Working with Golio was a great experience, understanding person,
              fast response time dose his work with honestly, experienced, a
              problem solver. Gives it it's all. I highly recommend him for
              providing beyond of high quality service.”
            </p>
            <div className="pt-4">
              <p className="text-lg flex gap-5 items-center">
                <span className="font-bold text-secondary">Donate: </span>
                <div className="flex flex-col">
                  <span className="font-medium">From 2016-present</span>
                  <span className="text-lg font-medium">
                    $2,20,000 per year
                  </span>
                </div>
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          style={style}
          ref={componentRef}
          className="keen-slider__slide number-slide4"
        >
          <div className="p-8 rounded-xl bg-[#FFF9EE] space-y-5 h-[350px]">
            <div className="lg:flex w-fit h-fit gap-3">
              <img src={image} alt="" />
              <div>
                <h1 className="text-[#061C3D] text-xl font-medium">
                  Annette Black
                </h1>
                <p className="text-primary">
                  Chief Chairman of{" "}
                  <span className="text-secondary text-lg">SaltSync </span>
                </p>
              </div>
            </div>
            <p className="text-[#061C3D]">
              “Golio is one of the BEST web designers I've ever worked with
              professionally. I am a repeat customer who continues to work with
              Shadman because of his talent/skills, great customer service, work
              ethic, and attention to detail. ”
            </p>
            <div className="pt-4">
              <p className="text-lg flex gap-5 items-center">
                <span className="font-bold text-secondary">Donate: </span>
                <div className="flex flex-col">
                  <span className="font-medium">From 2018-present</span>
                  <span className="text-lg font-medium">
                    $1,50,000 per year
                  </span>
                </div>
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          style={style}
          ref={componentRef}
          className="keen-slider__slide number-slide5"
        >
          <div className="p-8 rounded-xl bg-[#E7F5E8] space-y-5 h-[350px]">
            <div className="lg:flex w-fit h-fit gap-3">
              <img src={image} alt="" />
              <div>
                <h1 className="text-[#061C3D] text-xl font-medium">
                  Annette Black
                </h1>
                <p className="text-primary">
                  Chief Chairman of{" "}
                  <span className="text-secondary text-lg">NeerLab</span>
                </p>
              </div>
            </div>
            <p className="text-[#061C3D]">
              “This guy is true professional and very experienced in migration
              and server configuration. He was able to complete my order in time
              and as per agreed scope. Highly recommend!”
            </p>
            <div className="pt-4">
              <p className="text-lg flex gap-5 items-center">
                <span className="font-bold text-secondary">Donate: </span>
                <div className="flex flex-col">
                  <span className="font-medium">From 2015-22</span>
                  <span className="text-lg font-medium">
                    $4,10,000 per year
                  </span>
                </div>
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          style={style}
          ref={componentRef}
          className="keen-slider__slide number-slide6"
        >
          <div className="p-8 rounded-xl bg-[#F5F6F7] space-y-5 h-[350px]">
            <div className="lg:flex w-fit h-fit gap-3">
              <img src={image} alt="" />
              <div>
                <h1 className="text-[#061C3D] text-xl font-medium">
                  Annette Black
                </h1>
                <p className="text-primary">
                  Chief Chairman of{" "}
                  <span className="text-secondary text-lg">Velors</span>
                </p>
              </div>
            </div>
            <p className="text-[#061C3D]">
              “Working with Golio was a great experience, understanding person,
              fast response time dose his work with honestly, experienced, a
              problem solver. Gives it it's all. I highly recommend him for
              providing beyond of high quality service.”
            </p>
            <div className="pt-4">
              <p className="text-lg flex gap-5 items-center">
                <span className="font-bold text-secondary">Donate: </span>
                <div className="flex flex-col">
                  <span className="font-medium">From 2020-present</span>
                  <span className="text-lg font-medium">
                    $1,80,500 per year
                  </span>
                </div>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Testimonial;
