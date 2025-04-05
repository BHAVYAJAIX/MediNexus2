import React, { useState } from "react";
import Navbar from "../Shared/Navbar";
import banner from "../../assets/AboutUs.jpg";
import slide1 from "../../assets/slide2.jpg";
import slide2 from "../../assets/slide3.jpg";
import slide3 from "../../assets/slide4.jpg";
import slide4 from "../../assets/slide5.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const slideImages = [slide1, slide2, slide3, slide4];
  let [current, setCurrent] = useState(0);

  let prevSlide = () => {
    if (current == 0) setCurrent(slideImages.length - 1);
    else setCurrent(current - 1);
  };
  let nextSlide = () => {
    if (current == slideImages.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <>
      <Navbar />
      <section className="pt-[80px] bg-[#d3f9e2]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className="h-screen w-screen "
        >
          <img src={banner} alt="banner" className="" />
          <div className="z-10 bottom-0 hidden lg:block lg:left-32 py-4 rounded-t-lg lg:w-[400px] text-center bg-[#d3f9e2] absolute ">
            <p className="font-semibold text-3xl">About MediNexus</p>
          </div>
        </motion.div>
      </section>
      <section className=" bg-[#d3f9e2] pt-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className="h-screen max-w-7xl flex flex-col m-auto justify-center text-justify gap-1"
        >
          <p className="text-2xl font-semibold">Background</p>
          <p className="text-lg">
            MediNexus is a premier quaternary care hospital network delivering
            comprehensive healthcare solutions — spanning from primary to
            advanced quaternary care — across India and the Middle East. The
            hospital is owned and operated by M/s MediNexus Health Care
            Management Limited, a public limited company incorporated under the
            Companies Act, 1956, with the vision of offering world-class yet
            affordable healthcare. The company began its journey in 1999 and is
            now a trusted name in quality healthcare delivery through its
            extensive network of multi-specialty hospitals that serve a diverse
            range of patients. MediNexus has been at the forefront of India’s
            healthcare transformation, setting benchmarks for quality,
            affordability, and accessibility in healthcare services through its
            unwavering commitment to excellence. The MediNexus Blood Center
            holds NABH accreditation, and its laboratory services are accredited
            by NABL (National Accreditation Board for Testing and Calibration of
            Laboratories), reflecting the group’s emphasis on quality and
            precision. Ranked among the top 10 hospitals in India, MediNexus is
            known for its world-class clinical practices, evidence-based
            treatments, cutting-edge infrastructure, and patient-centric
            approach.{" "}
          </p>
          <p className="text-lg hidden lg:block">
            The group launched its flagship quaternary care hospital in Pune in
            2002 and has since grown into one of the largest healthcare networks
            in the region. Expanding from a 250-bed facility to a 2000-bed
            healthcare powerhouse, MediNexus now has hospitals in key cities of
            Maharashtra including Pune, Nagpur, Nashik, and Aurangabad, along
            with international centers in Bahrain, Oman, Saudi Arabia, Qatar,
            and the UAE. The group’s latest facility, MediNexus East, is
            equipped with state-of-the-art operating theatres, internationally
            certified ICUs, and an advanced Transplant Program for Kidney,
            Liver, and Pancreas. It also serves as a center of excellence for
            wellness care, high-risk obstetrics, advanced perinatology, and
            neonatology. MediNexus continues to redefine healthcare by
            integrating the core values of holistic healing and hospitality,
            grounded in its unwavering commitment to courtesy, compassion, and
            competence.
          </p>
        </motion.div>
      </section>
      <section className="bg-[#d3f9e2] ">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1 }}
          className="max-w-7xl m-auto h-full flex flex-col justify-center items-center gap-3  "
        >
          <p className="text-3xl font-semibold">Image Gallery</p>
          <div
            className="h-[70%] w-[70%] flex shadow-lg border border-5 shadow-black  transition ease-out duration-40"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slideImages.map((images, index) => {
              return <img src={images} alt="slider" key={index} />;
            })}
          </div>
          <div className="absolute  w-[59%] h-full flex justify-between items-center pt-5">
            <button
              onClick={prevSlide}
              className="bg-black rounded-full p-1 ms-1 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-10"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-black rounded-full p-1 me-2 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-10"
                fill="white"
              >
                <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
              </svg>
            </button>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default AboutUs;
