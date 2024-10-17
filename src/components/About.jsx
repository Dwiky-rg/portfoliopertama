import image from "../assets/AboutFoto.jpg";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";

function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const handleButtonClick = () => {
    window.open("https://www.linkedin.com/in/dwikyrachmatghiffari/", "_blank");
  };

  return (
    <section className="section mb-20" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 max-w-[482px] mix-blend-lighten"
          >
            <img src={image} className="rounded-3xl " alt="Image Hero" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent mb-6">About Me</h2>
            <p className="text-justify mb-2">
              My name is Dwiky Rachmat Ghiffari. An active student majoring in
              Informatics Engineering at Dinamika Bangsa University, has skills
              in various programming languages. I have good communication skills
              and am used to working together in a team. I have a strong desire
              to develop skills in technology and programming, especially in the
              front-end.
            </p>
            <div className="font-tertiary font-semibold text-[26px] mb-4">
              <span className="mr-2">Skills :</span>
              <TypeAnimation
                sequence={[
                  "HTML",
                  500,
                  "CSS",
                  500,
                  "Python",
                  500,
                  "React",
                  500,
                  "Tailwind CSS",
                  500,
                  "Bootstrap",
                  500,
                ]}
                speed={30}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <div className="flex items-center">
              <button className="btn btn-lg w-auto" onClick={handleButtonClick}>
                Hire ME
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
