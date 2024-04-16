import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom";
import { FaRegMap } from "react-icons/fa";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const heroHeight = {
  height: "80vh",
};

const CardDetails = () => {
  const properties = useLoaderData();
  const { id } = useParams();
  const property = properties.find((property) => property.id == id);
  const {
    segment,
    title,
    image,
    location,
    price,
    status,
    area,
    description,
    facilities,
    longitude,
    latitude,
  } = property;

  const scrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  console.log(scrollRef.current);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div style={heroHeight} className="">
        <div
          className="hero rounded-[50px] overflow-hidden h-full"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div
            style={heroHeight}
            className="hero-overlay  rounded-[50px] overflow-hidden h-full bg-opacity-60"
          ></div>
          <div className="hero-content max-h-full  rounded-[50px] overflow-hidden bg-yellow-50 m-10 border-4 border-neutral-400 p-0 grid grid-cols-2 ">
            <div>
              <img className="" src={image} />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-2">{title}</h2>

              <p className="text-neutral-500 mb-4">{description}</p>
              <p className="text-lg font-semibold my-2">
                Segment
                <span className="mr-6"> :</span>
                {segment}
              </p>
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold">Facilities :</h2>
                <div className="flex  gap-2">
                  {facilities.map((f, idx) => (
                    <p
                      className=" bg-neutral-100 py-1 rounded-2xl px-3"
                      key={idx}
                    >
                      {f}
                    </p>
                  ))}
                </div>
              </div>
              <p className="text-lg font-semibold my-2">
                Area
                <span className="ml-11 mr-6">:</span>
                {area}
              </p>
              <p className="text-lg font-semibold my-2">
                Location
                <span className=" ml-2 mr-6">:</span>
                <span className=" relative">
                  <span
                    onClick={() => scrollToBottom()}
                    className="absolute -right-44 cursor-pointer bg-neutral-200 py-1 px-3 text-neutral-700 rounded-3xl top-1/2 -translate-y-1/2  text-xs flex items-center  gap-2"
                  >
                    <FaRegMap size={20}></FaRegMap>
                    <span>tap to see on map</span>
                  </span>
                  <span
                    onClick={() => scrollToBottom()}
                    className="text-neutral-600 cursor-pointer "
                  >
                    {location}
                  </span>
                </span>
              </p>
              <p className="text-lg font-semibold my-2">
                Status
                <span className="ml-7 mr-6">:</span>
                {status}
              </p>
              <div className="flex items-center gap-4">
                <div className="font-semibold text-xl text-neutral-700">
                  {price}
                </div>
                <button className="btn bg-sky-400 rounded-full px-6 text-white hover:bg-sky-500">
                  Contact Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={scrollRef} className="mt-32 mb-40"></div>
      <div className="h-screen">
        <div className="h-3/4 rounded-3xl overflow-hidden">
          <MapContainer
            center={[latitude, longitude]}
            zoom={18}
            scrollWheelZoom={false}
            className="h-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
              <Popup>{title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
