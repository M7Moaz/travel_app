"use  client";
import { motion } from "framer-motion";

const Loading = () => {
  const name = "Travel";

  return (
    <section className="overflow-hidden">
      <div className="bg-gray-800 overflow-hidden absolute top-0 left-0 w-full h-screen z-40 flex justify-center items-center">
        {name.split("").map((el, idx) => (
          <motion.div
            key={idx}
            className={`${idx} text-9xl text-white`}
            initial={{ scale: 5, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { delay: 0.3 + idx * 0.4 },
            }}
          >
            {el}
          </motion.div>
        ))}
      </div>
      <motion.div
        className="absolute overflow-hidden z-50 top-0 left-0 w-full h-full flex justify-center items-center"
        variants={circleVariant}
        initial="initial"
        animate="animate"
      >
        <div className="w-full h-40  bg-gray-800"></div>
      </motion.div>
    </section>
  );
};

export default Loading;

const circleVariant = {
  initial: { x: "-100%", pathLength: 0 },
  animate: {
    x: "100%",
    pathLength: 1,
    transition: {
      delay: 3,
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};
