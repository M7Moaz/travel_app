import { motion } from "framer-motion";
const Title = ({ children }) => {
  return (
    <motion.h1
      className="text-center text-3xl md:text-5xl text-green-700 opacity-70 my-12"
      initial={{ scale: 0 }}
      whileInView={{
        scale: 1,
        transition: {
          delay: 0.1,
          duration: 0.5,
          type: "spring",
        },
      }}
    >
      {children}
    </motion.h1>
  );
};

export default Title;
