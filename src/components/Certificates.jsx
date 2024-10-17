import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import img1 from "../assets/Sertifikat1.jpg";
import img2 from "../assets/Sertifikat2.jpg";
import img3 from "../assets/Sertifikat3.jpg";
import img4 from "../assets/Sertifikat4.jpg";
import img5 from "../assets/Sertifikat5.jpg";
import img6 from "../assets/Sertifikat6.jpg";
import img7 from "../assets/Sertifikat7.jpg";
import img8 from "../assets/Sertifikat8.jpg";
import img9 from "../assets/Sertifikat9.jpg";
import img10 from "../assets/Sertifikat10.jpg";

function Certificates() {
  const certificates = [
    {
      img: img1,
      title: "sololearn",
      link: "https://www.linkedin.com/in/dwikyrachmatghiffari/details/certifications/",
    },
    {
      img: img2,
      title: "sololearn",
      link: "https://www.linkedin.com/in/dwikyrachmatghiffari/details/certifications/",
    },
    {
      img: img3,
      title: "freeCodeCamp",
      link: "https://www.linkedin.com/in/dwikyrachmatghiffari/details/certifications/",
    },
    {
      img: img4,
      title: "LPK GeTI",
      link: "https://www.linkedin.com/in/dwikyrachmatghiffari/details/certifications/",
    },
    {
      img: img5,
      title: "dicoding",
      link: "https://www.linkedin.com/in/dwikyrachmatghiffari/details/certifications/",
    },
    {
      img: img6,
      title: "dicoding",
      link: "https://www.linkedin.com/in/dwikyrachmatghiffari/details/certifications/",
    },
    {
      img: img7,
      title: "dicoding",
      link: "https://www.linkedin.com/in/dwikyrachmatghiffari/details/certifications/",
    },
    {
      img: img8,
      title: "dicoding",
      link: "https://www.linkedin.com/in/dwikyrachmatghiffari/details/certifications/",
    },
    {
      img: img9,
      title: "dicoding",
      link: "https://www.linkedin.com/in/dwikyrachmatghiffari/details/certifications/",
    },
    {
      img: img10,
      title: "dicoding",
      link: "https://www.linkedin.com/in/dwikyrachmatghiffari/details/certifications/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute btn p-1 -bottom-14 right-5 text-2xl z-20 cursor-pointer"
        onClick={onClick}
      >
        <FaArrowRight />
      </button>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute btn p-1 -bottom-14 left-5 text-2xl z-20 cursor-pointer md:right-20 md:left-auto"
        onClick={onClick}
      >
        <FaArrowLeft />
      </button>
    );
  }

  return (
    <section className="py-8 lg:section mb-20" id="certificates">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full lg:w-[90%] mx-auto text-center mb-12 pb-4 border-b border-white/50"
          >
            <motion.h2
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="h2 text-accent mb-4"
            >
              My Certificates
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-lg mx-auto text-[16px]"
            >
              I have completed various bootcamps. Each of these certificates
              represents the knowledge and skills I have acquired in the field
              of technology, especially programming.
            </motion.p>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="relative max-w-full px-4"
          >
            <Slider {...settings}>
              {certificates.map((certificate, index) => (
                <div key={index} className="px-2">
                  <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40 flex items-center justify-center flex-col">
                      <div className="font-tertiary font-semibold absolute text-[16px] -bottom-full left-4 group-hover:bottom-16 lg:group-hover:bottom-20 transition-all duration-500 z-30">
                        From : {certificate.title}
                      </div>
                      <div className="absolute -bottom-full left-4 group-hover:bottom-2 lg:group-hover:bottom-6 transition-all duration-700 z-30">
                        <button
                          className="btn btn-sm max-w-[150px] text-[13px]"
                          onClick={() =>
                            window.open(certificate.link, "_blank")
                          }
                        >
                          View all certificates
                        </button>
                      </div>
                    </div>
                    <img
                      className="transition-transform duration-500 group-hover:scale-110 w-full"
                      src={certificate.img}
                      alt={`${certificate.title} certificate`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
