
import Herosection from "../components/Herosection";
import FeaturesSection from "../components/FeaturesSection";
import PeopleCarousel from "../components/PeopleCarousel";
// import ReviewsCarousel from "../components/TestCarousel";
import { SocialProofSection } from "../components/SocialProofSection";
const Home = () =>{
  return(
    <section>
      <Herosection/>
      <SocialProofSection/>
      <PeopleCarousel/>
      <FeaturesSection/>
      {/* <ReviewsCarousel/> */}
    </section>
  )
};

export default Home;