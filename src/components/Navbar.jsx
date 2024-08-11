"use client";
import Link from "next/link";
import { MotionLi, MotionDiv } from "./MotionEl";
import { MdOutlineTravelExplore } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { t, ready } = useTranslation();
  const [links, setLinks] = useState([]);
  useEffect(() => {
    if (ready) {
      const data = t("links", { returnObjects: true });

      setLinks(data);
    }
  }, [ready, t]);

  const navAnimate = {
    initial: { y: -40 },
    animate: { y: 0 },
    hover: { scale: 1.2, transition: { delay: 0, duration: 0.2 } },
  };

  const logoAnimate = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: [0, 1],
      rotate: 360,
      scale: [1.2, 1],
      transition: {
        rotate: {
          delay: 0.8,
          duration: 0.5,
          ease: "easeInOut",
        },
        scale: {
          delay: 1.3,
          duration: 0.5,
          ease: "easeInOut",
          type: "spring",
          stiffness: 500,
        },
      },
    },
  };

  return (
    <nav className="text-white mt-3 flex justify-center md:justify-between z-20 relative">
      <Link href={"/"}>
        <MotionDiv
          className="hidden items-center gap-2 cursor-pointer md:flex"
          variants={logoAnimate}
          initial="initial"
          animate="animate"
        >
          <MdOutlineTravelExplore size="1.5em" /> <span>{t("Travel")}</span>
        </MotionDiv>
      </Link>
      {/* Menu */}
      <ul className="flex gap-3 md:flex">
        {links.map((el, idx) => (
          <MotionLi
            className="text-sm"
            key={el.name}
            variants={navAnimate}
            initial="initial"
            animate="animate"
            transition={{
              delay: 0.5,
              duration: 0.2 + idx * 0.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100 + idx * 100,
            }}
            whileHover="hover"
          >
            <Link href={el.url}>{el.name}</Link>
          </MotionLi>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
