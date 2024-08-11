"use client";
import Title from "./Title";
import { TiWorld } from "react-icons/ti";
import { FaCameraRetro, FaPhoneVolume } from "react-icons/fa6";
import { FaStar, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";

const Achievement = () => {
  const cards = [
    { icon: <TiWorld />, name: "Happy Travelers", count: "9200+" },
    { icon: <FaCameraRetro />, name: "Tours Success", count: "2100+" },
    { icon: <FaStar />, name: "Reviews", count: "92.8%" },
    { icon: <FaAward />, name: "Winning Award", count: "12K+" },
  ];
  return (
    <div className="mt-2 h-lvh relative">
      <div className="styless overflow-hidden bg-green-400 absolute w-1/2 h-2/3 rounded-l-full -z-10 right-0 bottom-0"></div>
      <Container>
        <Title>Our Achievements 😎</Title>
        <div>
          <motion.p
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.1, duration: 0.5, ease: "easeInOut" },
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            iure, enim quas maiores quisquam facilis culpa aliquam voluptatum
            consectetur exercitationem officia, nam magni eaque quaerat nesciunt
            nobis ea sit! Nulla fugit tenetur debitis quo est consectetur
            quibusdam mollitia deserunt voluptatem!
          </motion.p>
          <div className="flex justify-center flex-wrap gap-3 mt-16 gap-y-14">
            {cards.map((el, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: idx * 0.2,
                    duration: 0.5,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 300,
                  },
                }}
                key={idx}
                className={`${
                  idx % 2 === 0 ? "bg-green-500" : "bg-orange-500"
                } w-full p-3 text-center  relative text-white rounded-lg max-w-80 `}
              >
                <p
                  className={`text-5xl text-white ${
                    idx % 2 === 0 ? "bg-orange-500" : "bg-green-500"
                  } w-20 h-20 rounded-full flex justify-center items-center absolute left-1/2 -top-10 -translate-x-1/2`}
                >
                  {el.icon}
                </p>
                <p className="mt-10 text-4xl">{el.count}</p>
                <p className="uppercase mt-4 text-lg">{el.name}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.3 },
            }}
            className="mt-16 text-center pb-10"
          >
            <h2 className="text-2xl">We Can Find The Best Place For You ...</h2>
            <Link
              href={"/contact"}
              className="bg-orange-600 mx-auto w-fit text-white py-2 px-4 rounded-full mt-3 flex items-center uppercase hover:bg-green-400 transition-colors"
            >
              Get in touch
              <FaPhoneVolume className="ms-2" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Achievement;
