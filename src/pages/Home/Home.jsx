import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Nova Properties</title>
      </Helmet>
      <div className="bg-yellow-50" id="root">
        <Slider />
      </div>
    </div>
  );
};

export default Home;
