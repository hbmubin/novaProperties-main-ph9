import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useLoaderData } from "react-router-dom";
import { FaRegMap } from "react-icons/fa";
import { CgSize } from "react-icons/cg";
import { AiOutlineForm } from "react-icons/ai";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephoneForward } from "react-icons/bs";
import { HiOutlineForward } from "react-icons/hi2";

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

  return (
    <div>
      <Helmet>
        <title>{title}/Nova Properties</title>
      </Helmet>
      <div data-aos="fade-up" data-aos-delay="300" className="md:h-[80vh]">
        <div
          className="hero rounded-[50px] overflow-hidden h-full"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="hero-overlay lg:h-[80vh]  rounded-[50px] overflow-hidden h-full bg-opacity-60"></div>
          <div className="hero-content max-h-full  rounded-[50px] overflow-hidden bg-yellow-50 m-10 border-4 border-neutral-400 p-0 grid md:grid-cols-2 ">
            <div>
              <img className="" src={image} />
            </div>
            <div className="md:p-0 p-5">
              <h2 className="text-3xl font-semibold mb-2">{title}</h2>

              <p className="text-neutral-500 mb-4">{description}</p>
              <div className="text-lg font-semibold my-2 flex">
                <div className="flex items-center gap-2">
                  <MdOutlineMapsHomeWork size={22}></MdOutlineMapsHomeWork>
                  <span>Segment</span>
                </div>
                <span className="mr-6"> :</span>
                {segment}
              </div>
              <div className="flex md:items-center gap-4 items-start">
                <div className="flex md:items-center gap-2 text-lg font-semibold mb-2 md:mb-0">
                  <HiOutlineForward size={22}></HiOutlineForward>
                  <span className="text-nowrap">Facilities :</span>
                </div>
                <div className="md:flex  gap-2 md:mb-0 mb-6">
                  {facilities.map((f, idx) => (
                    <div
                      className=" bg-neutral-100 mb-2 md:mb-0 py-1 text-sm font-semibold text-neutral-700 rounded-2xl px-3 inline-block"
                      key={idx}
                    >
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-lg font-semibold my-2 flex">
                <div className="flex items-center gap-2">
                  <CgSize size={22}></CgSize>
                  <span>Area</span>
                </div>
                <span className="ml-10 mr-6">:</span>
                {area}
              </div>
              <div className="text-lg font-semibold my-2 flex md:items-center items-start">
                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker size={22}></HiOutlineLocationMarker>
                  <span>Location</span>
                </div>
                <span className=" ml-2 mr-6">:</span>
                <span className=" relative">
                  <span
                    onClick={() => scrollToBottom()}
                    className="md:absolute md:-right-32 hidden md:visible cursor-pointer bg-neutral-200 py-1 px-3 text-neutral-700 rounded-3xl top-1/2 -translate-y-1/2  text-xs md:flex items-center  gap-2"
                  >
                    <FaRegMap size={20}></FaRegMap>
                    <span>see on map</span>
                  </span>
                  <span
                    onClick={() => scrollToBottom()}
                    data-tip="see on map"
                    className="text-neutral-600 tooltip cursor-pointer "
                  >
                    {location}
                  </span>
                </span>
              </div>
              <div className="text-lg font-semibold my-2 flex">
                <div className="flex items-center gap-2">
                  <AiOutlineForm size={22}></AiOutlineForm>
                  <span>Status</span>
                </div>
                <span className="ml-7 mr-6">:</span>
                {status}
              </div>
              <div className="md:flex text-center items-center gap-4">
                <div className="font-semibold text-xl text-neutral-700  md:mt-0 mt-10 md:mb-0 mb-4">
                  {price}
                </div>
                <button className="btn bg-sky-400 rounded-full px-6 text-white hover:bg-sky-500">
                  <BsTelephoneForward size={18}></BsTelephoneForward>
                  <span className="ml-2">Contact Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={scrollRef} className="mt-32 mb-40"></div>
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        className="h-[70vh] rounded-3xl overflow-hidden"
      >
        <MapContainer
          center={[latitude, longitude]}
          zoom={16}
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
  );
};

export default CardDetails;
