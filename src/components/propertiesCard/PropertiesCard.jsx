import { MdOutlineMapsHomeWork } from "react-icons/md";
import { CgSize } from "react-icons/cg";
import { Link } from "react-router-dom";

const PropertiesCard = ({ property }) => {
  const { id, segment, title, image, location, price, status, area } = property;
  const statusModify = status.charAt(0).toUpperCase() + status.slice(1);
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="500"
      className="card p-[2px] rounded-3xl card-compact bg-base-100 shadow"
    >
      <figure className="relative">
        <img src={image} alt="Shoes" />
        <div className="absolute right-0 bottom-0">
          <div className=" relative rounded-tl-2xl py-2 px-3 overflow-hidden font-semibold bg-orange-200">
            For {statusModify}
            <div className="hero-overlay opacity-30 left-0  absolute top-0 w-full h-full"></div>
          </div>
        </div>
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{title}</h2>
          <div className="font-semibold text-lg">{price}</div>
        </div>
        <div className="flex justify-between my-4 text-neutral-600 font-semibold">
          <div className="flex gap-2 items-center">
            <span>
              <MdOutlineMapsHomeWork size={25}></MdOutlineMapsHomeWork>
            </span>
            <div>{segment}</div>
          </div>
          <div className="flex gap-1 items-center">
            <span>
              <CgSize size={25}></CgSize>
            </span>
            <div className="">{area}</div>
          </div>
        </div>
        <div className="card-actions flex-grow items-end">
          <Link
            to={`/property/${id}`}
            className="btn rounded-full bg-base-200 hover:bg-sky-400 hover:text-white w-full"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCard;
