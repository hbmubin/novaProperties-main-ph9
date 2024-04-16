import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center md:text-start pb-6 pt-10 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
            <p>123 Main St, City Center, New York</p>
            <p>Email: info@novaproperty.com</p>
            <p>Phone: +1 234 5678</p>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
            <div className="flex items-center gap-4 md:justify-start justify-center">
              <a
                href="#"
                className="mr-4 tooltip tooltip-bottom"
                data-tip="facebook"
              >
                <FaFacebook></FaFacebook>
              </a>
              <a
                href="#"
                className="mr-4 tooltip tooltip-bottom"
                data-tip="twitter"
              >
                <FaTwitter></FaTwitter>
              </a>
              <a
                href="#"
                className="mr-4 tooltip tooltip-bottom"
                data-tip="instagram"
              >
                <FaInstagram></FaInstagram>
              </a>
              <a
                href="#"
                className="mr-4 tooltip tooltip-bottom"
                data-tip="linkedin"
              >
                <FaLinkedin></FaLinkedin>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p>&copy; 2024 Nova Properties. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
