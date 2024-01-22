import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
const Footer = () => {
  return (
    <>
      <div className="footer d-flex justify-content-between align-items-center">
        <h1 className="footer-heading">MARKETPLACE.</h1>
        <div className="footer-icons d-flex">
          <FaFacebookF />
          <FaTwitter />
          <IoLogoDiscord />
          <FaInstagram />
        </div>
      </div>
    </>
  );
};

export default Footer;
