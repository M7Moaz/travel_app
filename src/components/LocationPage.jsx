"use client";
import { useTranslation } from "react-i18next";
import { MotionDiv } from "./MotionEl";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Loading from "./Loading";

const LocationPage = ({ id }) => {
  const { t, ready } = useTranslation();
  const [data, setData] = useState(null);
  const [img, setImage] = useState(null);

  const imgAnimate = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  const textAnimateLeft = {
    initial: { opacity: 0, x: 40 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        stiffness: 500,
      },
    },
  };
  const textAnimateRight = {
    initial: { opacity: 0, x: -40 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.5,
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
        stiffness: 500,
      },
    },
  };
  const Appear = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        delay: 2,
        duration: 0.5,
        type: "spring",
        stiffness: 400,
      },
    },
  };
  const cardAnimate = {
    initial: { scale: 0, y: -60 },
    animate: {
      scale: 1,
      y: 0,
      transition: {
        delay: 2.5,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const cardImageAnimate = (dalay) => ({
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        delay: 2.9 + dalay * 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  });

  useEffect(() => {
    if (ready) {
      const els = t("cards", { returnObjects: true });
      const card = els[id - 1];
      setData(card);
      setImage(card.image);
    }
  }, [t, ready, id]);

  if (!data) {
    return <Loading />;
  }

  return (
    <div>
      <MotionDiv
        key={img}
        style={{ backgroundImage: `url(${img})` }}
        className="img-container absolute object-contain"
        variants={imgAnimate}
        initial="initial"
        animate="animate"
      ></MotionDiv>
      <div className="text-white mt-5 md:mt-12">
        <div className="text-center text-sm md:text-md">
          <motion.p
            className="text-lg"
            variants={textAnimateLeft}
            initial="initial"
            animate="animate"
          >
            {data.title}
          </motion.p>
          <motion.h2
            className="font-bold text-3xl md:text-5xl mt-2 text-orange-500"
            variants={textAnimateRight}
            initial="initial"
            animate="animate"
          >
            {data.name}
          </motion.h2>
          <motion.p
            className="mt-1 md:mt-3 text-gray-300"
            variants={Appear}
            initial="initial"
            animate="animate"
          >
            {data.desc}
          </motion.p>
        </div>
        <motion.div
          className="card mt-8 bg-blue-50 relative bg-opacity-10 backdrop-blur-sm p-4 rounded-lg w-fit mx-auto"
          variants={cardAnimate}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-md md:text-lg font-medium mb-2 absolute bg-opacity-50 backdrop-blur-lg bg-orange-800 py-1 px-4 uppercase tracking-widest rounded-full left-1/2 -translate-x-1/2 -top-4">
            {t("Details")}
          </h2>
          <div className="mt-2 md:mt-5 md:text-base text-center text-sm">
            <p className="mt-2 md:mt-2 text-red-200">
              {data.details.best_time_to_visit}
            </p>
            <p className="mt-1 md:mt-2 text-blue-200">
              {data.details.currency}
            </p>
            <p className="mt-1 md:mt-2 text-orange-200">
              {data.details.language}
            </p>
            <p className="mt-1 md:mt-2 text-green-200">
              {data.details.places_of_interest}
            </p>
          </div>
        </motion.div>
        <div className="flex gap-2 mt-5 w-full cards overflow-x-scroll overflow-y-hidden">
          {data.details.images.map((el, idx) => (
            <motion.div
              key={el.url}
              style={{ backgroundImage: `url(${el.url})` }}
              className={`${
                img === el.url ? "hidden" : "block"
              } img-slider min-w-60 min-h-60 rounded-3xl cursor-pointer`}
              variants={cardImageAnimate(idx)}
              initial="initial"
              animate="animate"
              whileHover={{
                opacity: 0.5,
                transition: { duration: 0.2, delay: 0.2 },
              }}
              onClick={() => {
                setImage(el.url);
              }}
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
