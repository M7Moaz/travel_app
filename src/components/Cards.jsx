"use client";
import { IoHeartSharp } from "react-icons/io5";
import { MotionDiv } from "@/components/MotionEl";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Loading from "./Loading";

const Cards = () => {
  const { t, ready } = useTranslation();
  const [cards, setCards] = useState([]);
  const [active, setActive] = useState(1);
  const [loadingDone, setLoadingDone] = useState(true);

  useEffect(() => {
    const hasLoaded = localStorage.getItem("hasLoaded");
    if (!hasLoaded) {
      setTimeout(() => {
        setLoadingDone(false);
        localStorage.setItem("hasLoaded", "true");
      }, 4500);
    }
    if (hasLoaded) {
      setLoadingDone(false);
    }
  }, []);

  useEffect(() => {
    if (ready) {
      const data = t("cards", { returnObjects: true });
      setCards(data);
    }
  }, [ready, t]);

  if (loadingDone || cards.length === 0) {
    return <Loading />;
  }

  const bgAnimate = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        delay: 0,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };
  const textAnimate = (delay) => ({
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        delay,
        duration: 0.4,
        ease: "easeInOut",
        type: "spring",
        stiffness: 500,
      },
    },
  });
  const cardAnimate = (delay) => ({
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        scale: { delay: 2 + delay * 0.25 },
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  });

  return (
    <section>
      <div className="text-white items-center gap-5 mt-16">
        <div className="text-center">
          <MotionDiv
            key={`title-${active}`}
            className="uppercase"
            variants={textAnimate(1)}
            initial="initial"
            animate="animate"
          >
            {cards[active - 1].title}
          </MotionDiv>
          <MotionDiv
            key={`name-${active}`}
            variants={textAnimate(1.4)}
            initial="initial"
            animate="animate"
            className="text-4xl font-bold mt-2 md:text-6xl"
          >
            {cards[active - 1].name}
          </MotionDiv>
          <MotionDiv
            key={`desc-${active}`}
            variants={textAnimate(1.8)}
            initial="initial"
            animate="animate"
            className="mt-3 text-sm"
          >
            {cards[active - 1].desc}
          </MotionDiv>
          <div className="mt-5 flex gap-3 justify-center items-center">
            <MotionDiv
              initial={{ scale: 2, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 360,
                transition: { delay: 1.9, duration: 0.4, ease: "easeInOut" },
              }}
            >
              <IoHeartSharp className="text-lg text-white bg-red-700 rounded-full p-1.5 pt-2 w-10 h-10 cursor-pointer" />
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 2, duration: 0.4 } }}
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
                href={`/location/${active}`}
                className="uppercase border px-5 py-3 rounded-full text-xs cursor-pointer"
              >
                {t("DiscoverLocation")}
              </Link>
            </MotionDiv>
          </div>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper gap-2 mt-9"
        >
          {cards.map((card, idx) =>
            card.id !== active ? (
              <SwiperSlide key={card.name}>
                <MotionDiv
                  className="img-slider cursor-pointer relative min-w-72 h-80 rounded-xl "
                  style={{ backgroundImage: `url(${card.image})` }}
                  onClick={() => setActive(card.id)}
                  variants={cardAnimate(idx)}
                  initial="initial"
                  animate="animate"
                  whileTap={{
                    opacity: 0.5,
                    transition: {
                      delay: 0,
                      duration: 0.2,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <div className="absolute bottom-0 p-3">
                    <p className="text-gray-200">{card.title}</p>
                    <h2 className="font-bold text-lg text-yellow-500">
                      {card.name}
                    </h2>
                  </div>
                </MotionDiv>
              </SwiperSlide>
            ) : (
              ""
            )
          )}
        </Swiper>
        <MotionDiv
          key={active}
          variants={bgAnimate}
          initial="initial"
          animate="animate"
          className="img-container absolute"
          style={{ backgroundImage: `url(/${active}.png)` }}
        ></MotionDiv>
      </div>
    </section>
  );
};

export default Cards;
