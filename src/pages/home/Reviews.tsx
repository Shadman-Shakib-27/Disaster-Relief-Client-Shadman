import Container from "@/components/shared/Container";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../assets/Images/review/Invisible.png";
import netflix from "../../assets/Images/review/Vector.png";
import google from "../../assets/Images/review/google.png";
import youtube from "../../assets/Images/review/youtube.png";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
};

const Reviews = () => {
  return (
    <Container className="mb-12">
      <div className="w-[500px] p-2 my-10">
        <h1 className="font-bold text-4xl text-[#061C3D] mb-5">
          What client says
        </h1>
        <p className="text-dark-gray">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra.
        </p>
      </div>
      {/* <Slider {...settings} data-aos="fade-up"> */}
      <div
        data-aos="fade-up"
        className="p-8 rounded-xl bg-[#FFF9EE] space-y-5 h-[350px]"
      >
        <div className="flex gap-3">
          <img src={image} alt="" />
          <div>
            <h1 className="text-[#061C3D] text-xl font-medium">
              Annette Black
            </h1>
            <p className="text-dark-gray">
              Chief Chairman of{" "}
              <span className="text-[#7534FF] text-lg">Netflix</span>
            </p>
          </div>
        </div>
        <p className="text-[#061C3D]">
          “Golio is one of the BEST web designers I've ever worked with
          professionally. I am a repeat customer who continues to work with
          Zakir because of his talent/skills, great customer service, work
          ethic, and attention to detail. ”
        </p>
        <img className="pt-8" src={netflix} alt="" />
      </div>
      <div
        data-aos="fade-up"
        className="p-8 rounded-xl bg-[#E7F5E8] space-y-5 h-[350px]"
      >
        <div className="flex gap-3">
          <img src={image} alt="" />
          <div>
            <h1 className="text-[#061C3D] text-xl font-medium">
              Annette Black
            </h1>
            <p className="text-dark-gray">
              Chief Chairman of{" "}
              <span className="text-[#7534FF] text-lg">Google</span>
            </p>
          </div>
        </div>
        <p className="text-[#061C3D]">
          “This guy is true professional and very experienced in migration and
          server configuration. He was able to complete my order in time and as
          per agreed scope. Highly recommend!”
        </p>
        <img className="pt-6" src={google} alt="" />
      </div>
      <div
        data-aos="fade-up"
        className="p-8 rounded-xl bg-[#F5F6F7] space-y-5 h-[350px]"
      >
        <div className="flex gap-3">
          <img src={image} alt="" />
          <div>
            <h1 className="text-[#061C3D] text-xl font-medium">
              Annette Black
            </h1>
            <p className="text-dark-gray">
              Chief Chairman of{" "}
              <span className="text-[#7534FF] text-lg">Youtube</span>
            </p>
          </div>
        </div>
        <p className="text-[#061C3D]">
          “Working with Golio was a great experience, understanding person, fast
          response time dose his work with honestly, experienced, a problem
          solver. Gives it it's all. I highly recommend him for providing beyond
          of high quality service.”
        </p>
        <img className="pt-1" src={youtube} alt="" />
      </div>
      <div
        data-aos="fade-up"
        className="p-8 rounded-xl bg-[#FFF9EE] space-y-5 h-[350px]"
      >
        <div className="flex gap-3">
          <img src={image} alt="" />
          <div>
            <h1 className="text-[#061C3D] text-xl font-medium">
              Annette Black
            </h1>
            <p className="text-dark-gray">
              Chief Chairman of{" "}
              <span className="text-[#7534FF] text-lg">Netflix</span>
            </p>
          </div>
        </div>
        <p className="text-[#061C3D]">
          “Golio is one of the BEST web designers I've ever worked with
          professionally. I am a repeat customer who continues to work with
         Shadman because of his talent/skills, great customer service, work
          ethic, and attention to detail. ”
        </p>
        <img className="pt-8" src={netflix} alt="" />
      </div>
      <div
        data-aos="fade-up"
        className="p-8 rounded-xl bg-[#E7F5E8] space-y-5 h-[350px]"
      >
        <div className="flex gap-3">
          <img src={image} alt="" />
          <div>
            <h1 className="text-[#061C3D] text-xl font-medium">
              Annette Black
            </h1>
            <p className="text-dark-gray">
              Chief Chairman of{" "}
              <span className="text-[#7534FF] text-lg">Google</span>
            </p>
          </div>
        </div>
        <p className="text-[#061C3D]">
          “This guy is true professional and very experienced in migration and
          server configuration. He was able to complete my order in time and as
          per agreed scope. Highly recommend!”
        </p>
        <img className="pt-6" src={google} alt="" />
      </div>
      <div
        data-aos="fade-up"
        className="p-8 rounded-xl bg-[#F5F6F7] space-y-5 h-[350px]"
      >
        <div className="flex gap-3">
          <img src={image} alt="" />
          <div>
            <h1 className="text-[#061C3D] text-xl font-medium">
              Annette Black
            </h1>
            <p className="text-dark-gray">
              Chief Chairman of{" "}
              <span className="text-[#7534FF] text-lg">Youtube</span>
            </p>
          </div>
        </div>
        <p className="text-[#061C3D]">
          “Working with Golio was a great experience, understanding person, fast
          response time dose his work with honestly, experienced, a problem
          solver. Gives it it's all. I highly recommend him for providing beyond
          of high quality service.”
        </p>
        <img className="pt-1" src={youtube} alt="" />
      </div>
      {/* </Slider> */}
    </Container>
  );
};

export default Reviews;
