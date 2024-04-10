import { Helmet } from "react-helmet-async";
import { CiFaceFrown } from "react-icons/ci";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen poppins">
      <div className="flex flex-col items-center">
        <Helmet>
          <title>Nova/Error</title>
        </Helmet>
        <CiFaceFrown
          size={200}
          color="#808080
"
        ></CiFaceFrown>
        <h1 className=" mb-4 text-6xl text-gray-500 font-semibold">404</h1>
        <h2 className="text-4xl text-gray-500 ">Page not found</h2>
        <p className="mt-6 text-gray-400">
          The Page your are looking for dose not exist or another error occurred
        </p>
        <h2 className="mt-2 text-gray-400">
          Back to
          <span>
            <Link className="text-blue-500 underline font-semibold"> Home</Link>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Error;
