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
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-2">
          <div className="">
            <div className="group cardHover">
              <div>
                <img className="gallaryImage" src={Donation} />
                <div className="absoulateDiv"></div>
                <div className="cardContetWrapper">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    Food Distribution
                  </h1>
                  <p className="lg:mb-3 -mb-24 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Provide timely access to essential resources, promoting food
                    security and well-being for all members of our community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="group cardHover">
              <div>
                <img className="gallaryImage" src={Medicine} />
                <div className="absoulateDiv"></div>
                <div className="cardContetWrapper">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    Medicine
                  </h1>
                  <p className="lg:mb-3 -mb-24 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Provide timely access to essential resources, promoting food
                    security and well-being for all members of our community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="group cardHover">
              <div>
                <img className="gallaryImage" src={Cloths} />
                <div className="absoulateDiv"></div>
                <div className="cardContetWrapper">
                  <h1 className="font-dmserif text-3xl pb-8 font-bold text-white">
                    Cloths
                  </h1>
                  <p className="lg:mb-3 -mb-24  text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Provide timely access to essential resources, promoting food
                    security and well-being for all members of our community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="group cardHover">
              <div>
                <img className="gallaryImage" src={Cash} />
                <div className="absoulateDiv"></div>
                <div className="cardContetWrapper">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    Cash
                  </h1>
                  <p className="lg:mb-3 -mb-24  text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Provide timely access to essential resources, promoting food
                    security and well-being for all members of our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-4 mx-auto rounded-md">
          <div className="group cardHover h-[80vh]">
            <div>
              <img className="gallaryImage" src={Mask} />
              <div className="absoulateDiv"></div>
              <div className="cardContetWrapper">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Hygiene Product
                </h1>
                <p className="lg:mb-10 mb-24  text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
