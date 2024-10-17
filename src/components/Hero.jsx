import image from "../assets/Hero.png";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Hero() {
  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1CJvNRE2S-Kn6VRqOcg-qSWU14s7UAgr2/view?usp=drivesdk",
      "_blank"
    );
  };
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center mb-20"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[45px] font-bold leading-[0.9] lg:text-[90px]"
            >
              Hi, it's Dwiky
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-5 text-[27px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-2">I am</span>
              <TypeAnimation
                sequence={[
                  "Front-end developer",
                  2000,
                  "Human",
                  2000,
                  "Not a robot",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 max-w-lg mx-auto lg:mx-0"
            >
              Active student majoring in informatics engineering
              <span className="hidden md:inline">
                <br />
              </span>
              at Dinamika Bangsa University
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max items-center mb-8 mx-auto lg:mx-0 lg:mb-0"
            >
              <button
                className="block lg:hidden btn btn-sm"
                onClick={handleButtonClick}
              >
                Download My CV
              </button>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[24px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://instagram.com/_dwikyrachmat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/share/nXT24ZkKFHyGKuar/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.tiktok.com/@abcdwikyz?_t=8pRnoPLfYIr&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
              <a
                href="https://youtube.com/@dwikyrg11?si=IVK0QeMdnCvW_D9l"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="http://linkedin.com/in/dwikyrachmatghiffari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Dwiky-rg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]"
          >
            <img src={image} className="rounded-3xl " alt="Image Hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
