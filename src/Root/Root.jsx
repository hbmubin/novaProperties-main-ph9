import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Root = () => {
  return (
    <div className="poppins  bg-yellow-50">
      <div className="container mx-auto relative">
        <div className="bg-transparent absolute top-0 w-full">
          <Header></Header>
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
