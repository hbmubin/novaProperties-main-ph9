import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider/Slider";
import { useLoaderData } from "react-router-dom";
import PropertiesCard from "../../components/propertiesCard/PropertiesCard";
import { useRef } from "react";

const Home = () => {
  const properties = useLoaderData();
  const ref = useRef(null);
  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    console.log("scroll");
  };

  return (
    <div>
      <Helmet>
        <title>Nova Properties</title>
      </Helmet>
      <div className="bg-yellow-50 rounded-xl overflow-hidden" id="root">
        <Slider handleScroll={handleScroll} />
      </div>
      <div className="max-w-3xl mb-16 text-center mx-auto" ref={ref}>
        <h2 className="text-4xl mb-6 font-semibold">Our Properties</h2>
        <p className="text-neutral-600">
          Discover an array of exquisite residences tailored to your lifestyle.
          Explore spacious homes, luxurious townhouses, and chic apartments in
          prime locations.
        </p>
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
