import { TiHome } from "react-icons/ti";
import { FaUser, FaClipboardList, FaBriefcase } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed bottom-4 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[89px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer h-[60px] w-[60px] flex items-center justify-center "
          >
            <TiHome />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer h-[60px] w-[60px] flex items-center justify-center"
          >
            <FaUser />
          </Link>
          <Link
            to="certificates"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer h-[60px] w-[60px] flex items-center justify-center"
          >
            <PiCertificateFill />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer h-[60px] w-[60px] flex items-center justify-center"
          >
            <IoIosMail />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
