"use client";
import { motion } from "framer-motion";
import { MotionDiv } from "./MotionEl";
import Link from "next/link";
import { IoHeartSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Loading from "./Loading";
const Holidays = () => {
  const { t, ready } = useTranslation();
  const [data, setData] = useState(null);
  const [active, setActive] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);
  useEffect(() => {
    if (ready) {
      const els = t("cards", { returnObjects: true });
      setData(els);
      setActive(els[Math.floor(Math.random() * els.length)]);
    }
  }, [ready, t]);

  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
    }
  }, [initialLoad]);

  const handlePrev = () => {
    if (active.id !== 1) {
      setActive(data[active.id - 2]);
    } else {
      setActive(data[data.length - 1]);
    }
  };
  const handleNext = () => {
    if (active.id !== data.length) {
      setActive(data[active.id]);
    } else {
      setActive(data[0]);
    }
  };

  const currentVariant = initialLoad
    ? animationVariant.initialLoad
    : animationVariant.swapPictures;

  if (!data || !active) {
    return <Loading />;
  }

  return (
    <div className="overflow-hidden" style={{ height: "calc(100vh - 60px)" }}>
      <div
        className="img-container absolute"
        style={{ backgroundImage: "url(/tripImage.svg)" }}
      ></div>
      <div className="text-white">
        <div>
          <motion.h2
            className="text-4xl text-center mt-12"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            BEST PLACES TO GO ON HOLIDAY
          </motion.h2>
        </div>
        <div>
          <motion.div
            className="bg-blue-100 p-3 backdrop-blur-sm bg-opacity-10 mt-10 rounded-lg flex"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1, duration: 0.5 },
            }}
          >
            <motion.div
              key={active.id}
              className="img-slider min-h-96 rounded-lg"
              style={{ backgroundImage: `url(${active.image})` }}
              variants={currentVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="z-50 h-full">
                <div className="p-5 text-center bg-blue-50 backdrop-blur-sm bg-opacity-5">
                  <motion.h1
                    className="text-2xl text-orange-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.4 }}
                  >
                    {active.title}
                  </motion.h1>
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.7, duration: 0.4 }}
                  >
                    {active.visiting}
                  </motion.p>
                  <div className="mt-2 flex gap-3 justify-center items-center">
                    <MotionDiv
                      initial={{ scale: 2, opacity: 0 }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                        rotate: 360,
                        transition: {
                          delay: 1.9,
                          duration: 0.4,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <IoHeartSharp className="text-lg text-white bg-red-700 rounded-full p-1.5 pt-2 w-10 h-10 cursor-pointer" />
                    </MotionDiv>
                    <MotionDiv
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: 2, duration: 0.4 },
                      }}
                      whileHover={{
                        scale: 1.1,
                        transition: {
                          delay: 0,
                          duration: 0.2,
                          type: "spring",
                          stiffness: 500,
                        },
                      }}
                    >
                      <Link
                        href={`/`}
                        className="uppercase border px-5 py-3 rounded-full text-xs cursor-pointer"
                      >
                        See Offers
                      </Link>
                    </MotionDiv>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex justify-evenly mt-2">
          <motion.button
            className={`bg-blue-50 backdrop-blur-lg bg-opacity-5 py-1 px-5 rounded-full text-sm`}
            onClick={handlePrev}
            initial={{ x: -50, opacity: 0 }}
            animate={{
              x: 1,
              opacity: 1,
              transition: {
                x: { delay: 2 },
                opacity: { delay: 2 },
                duration: 0.5,
              },
            }}
            whileTap={{
              scale: 1.2,
              transition: {
                delay: 0,
                duration: 0.1,
                type: "spring",
                stiffness: 500,
              },
            }}
          >
            Prev
          </motion.button>
          <motion.button
            className={` bg-blue-50 backdrop-blur-lg bg-opacity-5 py-1 px-5 rounded-full text-sm`}
            onClick={handleNext}
            initial={{ x: 50, opacity: 0 }}
            animate={{
              x: 1,
              opacity: 1,
              transition: {
                x: { delay: 2 },
                opacity: { delay: 2 },
                duration: 0.5,
              },
            }}
            whileTap={{
              scale: 1.2,
              transition: {
                delay: 0,
                duration: 0.1,
                type: "spring",
                stiffness: 500,
              },
            }}
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Holidays;

const animationVariant = {
  initialLoad: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0, transition: { delay: 1.5, duration: 1 } },
  },
  swapPictures: {
    initial: { scale: 0 },
    animate: { scale: 1, transition: { duration: 0.5 } },
    exit: { scale: 1, transition: { duration: 0.5 } },
  },
};
