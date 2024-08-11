"use client";
import Image from "next/image";
import Container from "./Container";
import { motion } from "framer-motion";
import Title from "./Title";

const Activities = () => {
  const activities = [
    { name: "Campaign", url: "/activity/campaign.png" },
    { name: "Hiking", url: "/activity/hiking.png" },
    { name: "Mountain Bike", url: "/activity/bike.png" },
    { name: "Fishing", url: "/activity/fishing.png" },
  ];
  return (
    <div className="relative">
      <div className="section-breaker bg-orange-500 absolute w-full h-10 -z-10 right-0 -bottom-20"></div>
      <Container>
        <Title>Make Your Holiday 😀</Title>
        <div className="">
          <div className="flex justify-between gap-5 flex-col md:flex-row text-center md:text-left">
            <motion.h1
              className="uppercase text-5xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5,
                  type: "spring",
                },
              }}
            >
              popular <span className="text-orange-500">Activities.</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5,
                  type: "spring",
                },
              }}
            >
              <h2 className="font-medium text-xl">Explore & Adventure </h2>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adi piscing elit.
                Suspendisse molestie.
              </p>
            </motion.div>
          </div>
          <div className="flex mt-10 gap-2 flex-wrap justify-center">
            {activities.map((el, idx) => (
              <motion.div
                key={idx}
                className="relative rounded-full overflow-hidden basis-52 shrink grow max-w-sm"
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: { delay: idx * 0.1, duration: 0.3 },
                }}
              >
                <Image src={el.url} width={400} height={400} alt="img" />
                <p className="absolute bg-gray-50 bg-opacity-5 backdrop-blur-sm opacity-0 w-full h-full flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white hover:opacity-100 text-xl transition-all">
                  {el.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Activities;
