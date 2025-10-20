
import Herosection from "../components/Herosection";
import FeaturesSection from "../components/FeaturesSection";
import PeopleCarousel from "../components/PeopleCarousel";
// import ReviewsCarousel from "../components/TestCarousel";

const Home = () =>{
  return(
    <section>
      <Herosection/>
      <PeopleCarousel/>
      <FeaturesSection/>
      {/* <ReviewsCarousel/> */}
    </section>
  )
};

export default Home;