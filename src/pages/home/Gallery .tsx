import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Donation from "../../assets/Images/Donation.jpg";
import Medicine from "../../assets/Images/Medicine.jpg";
import Cash from "../../assets/Images/Cash.jpg";
import Cloths from "../../assets/Images/Cloths.jpg";
import Mask from "../../assets/Images/Mask.jpg";

const Gallery = () => {
  return (
    <Container className="mb-8">
      <SectionTitle
        fTitle="Image"
        lTitle="Gallery"
        description="Our mission is to be a beacon of hope in times of crisis, offering a platform for individuals, organizations, and corporations to come together and make a meaningful difference in the lives of those in need."
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="group cardHover">
            <div className="relative">
              <img
                className="gallaryImage w-full h-full object-cover rounded-sm"
                src={Donation}
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <h1 className="font-dmserif text-center text-xl sm:text-3xl font-bold">
                  Food Distribution
                </h1>
                <p className="text-sm sm:text-lg text-center italic opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Provide timely access to essential resources, promoting food
                  security and well-being for all members of our community.
                </p>
              </div>
            </div>
          </div>

          <div className="group cardHover">
            <div className="relative h-[150px] sm:h-[260px]">
              <img
                className="gallaryImage w-full h-full object-cover rounded-sm"
                src={Medicine}
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <h1 className="font-dmserif text-center text-xl sm:text-3xl font-bold">
                  Medicine
                </h1>
                <p className="text-sm sm:text-lg text-center italic opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Provide timely access to essential resources, promoting food
                  security and well-being for all members of our community.
                </p>
              </div>
            </div>
          </div>

          <div className="group cardHover">
            <div className="relative">
              <img
                className="gallaryImage w-full h-full object-cover rounded-sm"
                src={Cloths}
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <h1 className="font-dmserif text-xl text-center sm:text-3xl font-bold pb-4">
                  Cloths
                </h1>
                <p className="text-sm sm:text-lg italic opacity-0 transition-opacity duration-300 text-center group-hover:opacity-100">
                  Provide timely access to essential resources, promoting food
                  security and well-being for all members of our community.
                </p>
              </div>
            </div>
          </div>

          <div className="group cardHover">
            <div className="relative h-[150px] sm:h-[272px]">
              <img
                className="gallaryImage w-full h-full object-cover rounded-sm"
                src={Cash}
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <h1 className="font-dmserif text-center text-xl sm:text-3xl font-bold">
                  Cash
                </h1>
                <p className="text-sm text-center sm:text-lg italic opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Provide timely access to essential resources, promoting food
                  security and well-being for all members of our community.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-4 mx-auto rounded-md w-full">
          <div className="group cardHover h-[300px] sm:h-[400px] lg:h-[540px]">
            <div className="relative h-full w-full">
              <img
                className="gallaryImage w-full h-full object-cover rounded-sm"
                src={Mask}
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <h1 className="font-dmserif text-center text-xl sm:text-3xl font-bold">
                  Hygiene Product
                </h1>
                <p className="text-sm sm:text-lg italic text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Provide timely access to essential resources, promoting food
                  security and well-being for all members of our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
