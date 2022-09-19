import Banner from "../components/home/Banner";
import Carousel from "../components/home/Carousel";
import NewProducts from "../components/home/NewProducts";
import TabProducts from "../components/home/TabProducts";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <NewProducts />
      <Banner />
      <TabProducts />
    </div>
  );
};

export default HomePage;
