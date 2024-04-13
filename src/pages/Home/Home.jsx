import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";
import { useLoaderData } from "react-router-dom";
import PropertiesCard from "../../components/propertiesCard/PropertiesCard";

const Home = () => {
  const properties = useLoaderData();
  console.log(properties);

  return (
    <div>
      <Helmet>
        <title>Nova Properties</title>
      </Helmet>
      <div className="bg-yellow-50" id="root">
        <Slider />
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertiesCard
            key={property.id}
            property={property}
          ></PropertiesCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
