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
  };

  return (
    <div>
      <Helmet>
        <title>Nova Properties</title>
      </Helmet>
      <div className=" rounded-xl overflow-hidden" id="root">
        <Slider handleScroll={handleScroll} />
      </div>
      <div className="max-w-3xl mb-16 pt-10 text-center mx-auto" ref={ref}>
        <h2 className="text-4xl mb-6 font-semibold">Our Properties</h2>
        <p className="text-neutral-600">
          Discover an array of exquisite residences tailored to your lifestyle.
          Explore spacious homes, luxurious townhouses, and chic apartments in
          prime locations.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
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
