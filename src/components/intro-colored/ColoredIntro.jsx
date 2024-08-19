import React, { useEffect, useRef, useState } from "react";
import {
  useAnimate,
  motion,
  useInView,
  useAnimation,
  delay,
} from "framer-motion";
import NewStar from "../../resources/etoile.svg";

function ColoredIntro(props) {
  const ref = useRef(null);
  const [randomPositionStars, setRandomPositionStars] = useState([]);
  const word = props.title;
  const letterColors = ["#FF008C", "#FFD000", "#FF8B00", "#FF0055", "black"];
  const wordArray = word.split("");
  const controlsLetters = useAnimation();
  const inView = useInView(ref, { amount: 0.5, once: true });
  //   const container = useState(props.introRef);
  const letterVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        type: "spring",
        stiffness: 100,
        bounce: 2,
        duration: 1,
      },
    },
  };
  const starsVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        bounce: 1,
        duration: 1,
      },
    },
  };

  //   useEffect(() => {
  //     console.log("container--------", container[0].current.style);
  //     console.log("object keys", Object.values(container[0].current.style));
  //     console.log("test2", wordArray);
  //   }, [container]);
  useEffect(() => {
    const randomPositionStars = Array.from({ length: 10 }, () => {
      return {
        x: -1 * (Math.random() * (1850 - 100) + 100),
        y: Math.random() * (300 - 0) + 0,
      };
    });
    console.log(randomPositionStars);
    setRandomPositionStars(randomPositionStars);
  }, []);

  useEffect(() => {
    if (inView) {
      controlsLetters.start("visible");
      wordArray.map((letter, i) => {
        const current = document.getElementById(`letterC-${i}`);
        setTimeout(() => {
          letterColors.map((color, index) => {
            setTimeout(() => {
              current.style.color = letterColors[index];
            }, 300 * index);
          });
        }, 100 * i);
      });
    } else {
      controlsLetters.start("hidden");
    }
  }, [inView]);
  return (
    <div className="flex justify-center items-center flex-col">
      <motion.div
        initial="hidden"
        ref={ref}
        transition={{ staggerChildren: 0.2 }}
        animate={controlsLetters}
        style={{ width: "50%" }}
        className="intro-title"
      >
        {wordArray.map((letter, i) => {
          return (
            <motion.span key={i} id={`letterC-${i}`} variants={letterVariants}>
              {letter}
            </motion.span>
          );
        })}
        {randomPositionStars.map((star) => {
          return (
            <>
              <motion.img
                src={NewStar}
                variants={starsVariants}
                alt="star"
                className="star-etoil"
                style={{
                  left: `${star.x}px`,
                  top: `${star.y}px`,
                }}
              />
            </>
          );
        })}
        {/* <motion.img
            src={NewStar}
            variants={starsVariants}
            alt="star"
            className="star-etoil"
            // style={{
            //   left: `${star.x}px`,
            //   top: `${star.y}px`,
            // }}
          /> */}
      </motion.div>
      <span className="flaver-description">{props.text}</span>
      <span className="rec-text mt-auto text-center ">{props.sub}</span>
    </div>
  );
}
export default ColoredIntro;
