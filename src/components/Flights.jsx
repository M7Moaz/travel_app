"use client";
import { motion } from "framer-motion";
const Flights = () => {
  const text = "Tour and Travel";
  return (
    <div className="">
      <motion.div
        className="img-container absolute top-0 left-0"
        style={{ backgroundImage: "url(/flight.png)" }}
        variants={bgImageAnimate}
        initial="initial"
        animate="animate"
      ></motion.div>
      <div className="mt-10 text-white">
        <div className="text-center flex justify-center gap-4">
          {text.split(" ").map((el, idx) => (
            <motion.h2
              key={idx}
              className="text-6xl text-orange-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 1 + idx * 0.25,
                duration: 0.5,
                type: "spring",
                stiffness: 300,
              }}
            >
              {`${el}`}
            </motion.h2>
          ))}
        </div>
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.8,
            duration: 0.5,
          }}
        >
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white z-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full focus:outline-none p-4 ps-10 text-sm text-orange-300 rounded-lg bg-blue-50 backdrop-blur-sm bg-opacity-5"
              placeholder="Search for flights..."
              required
            />
            <motion.button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-orange-500  focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
              whileTap={{
                scale: 0.8,
                transition: {
                  duration: 0.2,
                  type: "spring",
                  stiffness: 200,
                  ease: "easeInOut",
                },
              }}
            >
              Search
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Flights;

const bgImageAnimate = {
  initial: { scale: 5, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.5,
      easeInOut: true,
      type: "spring",
      stifness: 400,
    },
  },
};
