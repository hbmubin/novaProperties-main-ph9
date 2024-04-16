import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Root = () => {
  return (
    <div className="poppins  bg-yellow-50">
      <div className="md:container  w-11/12 mx-auto min-h-screen">
        <div data-aos="fade-down" data-aos-duration="500">
          <Header></Header>
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
