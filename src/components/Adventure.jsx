"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "./Container";
import Title from "./Title";
import { FaLocationDot } from "react-icons/fa6";
const Adventure = () => {
  return (
    <div className="relative mt-28 h-lvh">
      <div className="styless overflow-hidden bg-green-400 absolute w-1/2 h-2/3 rounded-r-full -z-10 left-0 bottom-0"></div>
      {/* <div className="section-breaker bg-orange-500 absolute w-full h-10 -z-10 right-0 bottom-0"></div> */}
      <Container>
        <div>
          <Title>Discover The World 🚵🏼‍♀️</Title>
          <div className="relative flex justify-center md:justify-around flex-col text-center md:text-left md:flex-row ">
            <div className="relative">
              <motion.h1
                className="text-3xl md:text-4xl xl:text-7xl uppercase"
                initial={{ scale: 0 }}
                whileInView={{
                  scale: 1,
                  transition: { delay: 0.1, duration: 0.3 },
                }}
              >
                Natural{" "}
                <span className="md:block text-orange-500">Adventure.</span>
              </motion.h1>
              <motion.div
                className="flex bg-orange-400 mt-10 gap-3 p-3 rounded-xl relative md:max-w-lg z-10 md:left-12 lg:left-40 xl:left-52"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
              >
                <FaLocationDot className="text-6xl shadow-2xl text-green-700 bg-white p-5 w-20 h-20 rounded-full absolute left-1/2 -translate-x-1/2 md:-left-10 md:top-1/2 -translate-y-1/2 md:-translate-x-0" />
                <p className="ps-10 text-white mt-12 md:mt-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  blanditiis minima et tenetur maxime porro sunt doloremque est
                  recusandae pariatur!
                </p>
              </motion.div>
            </div>
            <motion.div
              className="flex relative md:right-10 mt-5 md:mt-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.5 },
              }}
            >
              <Image
                className="rounded-3xl w-auto md:w-auto"
                src={"/1.png"}
                width={500}
                height={500}
                alt="img"
              />
              <Image
                className="rounded-3xl absolute hidden md:block md:-right-14 lg:-right-20 md:bottom-5 lg:bottom-10 border-4 border-green-50"
                src={"/4.png"}
                width={300}
                height={300}
                alt="img"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Adventure;
