import "./App.css";
import { useLayoutEffect, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useAnimate, motion, useInView, useAnimation } from "framer-motion";
import candyShapes from "./resources/candy-hearts.jpg";
import wormCandies from "./resources/candy-worm.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faHouse, faStar } from "@fortawesome/free-solid-svg-icons";
import ThreejsImage from "./components/ThreejsImage.jsx";
import Swip from "./components/swipe/Swip.jsx";
import Flavors from "./components/flavors/Flavors.jsx";
import RecommendedProducts from "./components/flavors/RecommendedProducts.jsx";

function App() {
  // const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const imgRef = useRef();
  const threeDRef = useRef();
  const isInView = useInView(ref);
  const isInViewThreeD = useInView(threeDRef);
  const isInViewImg = useInView(imgRef);

  const controlsImg = useAnimation();
  const controlsThreeD = useAnimation();

  const mainControls = useAnimation();
  const [elements, setElements] = useState([]);

  const imgLeftVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        stiffness: 100,
      },
    },
    hidden: {
      x: 50,
      opacity: 0,
      y: 50,
    },
  };
  const imgRightVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -50,
      y: 50,
    },
  };

  useEffect(() => {
    console.log("here", isInViewImg);
    if (isInViewImg) {
      controlsImg.start("visible");
    } else {
      controlsImg.start("hidden");
    }
  }, [isInViewImg]);

  useEffect(() => {
    console.log("here", isInViewThreeD);
    if (isInViewThreeD) {
      controlsThreeD.start("visible");
    } else {
      controlsThreeD.start("hidden");
    }
  }, [isInViewImg]);

  //on scroll animation
  useEffect(() => {
    if (isInView) {
      console.log("here", isInView);
      // mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }

    generateRandomPositions();
  }, [isInView]);

  // //animating the circle
  // const animationCircleFunc = async () => {
  //   await animate(
  //     "#circle",
  //     {
  //       x: 100,
  //     },
  //     { ease: "linear", duration: 4, repeat: Infinity, repeatType: "reverse" }
  //   );
  //   await animate(
  //     "#circle",
  //     {
  //       rotate: 360,
  //     },
  //     { ease: "linear", duration: 4, repeat: Infinity, repeatType: "reverse" }
  //   );
  // };

  // //animating the square
  // const animateSquareFunc = async () => {
  //   await animate(
  //     "#square",
  //     {
  //       x: -100,
  //     },
  //     { ease: "linear", duration: 4, repeat: Infinity, repeatType: "reverse" }
  //   );
  //   await animate(
  //     "#square",
  //     {
  //       rotate: -360,
  //     },
  //     { ease: "linear", duration: 4, repeat: Infinity, repeatType: "reverse" }
  //   );
  // };

  //random positions for the stars
  const generateRandomPositions = () => {
    const newElements = [];
    for (let i = 0; i < 20; i++) {
      const randomX = Math.random() * 25; // Adjust range as needed
      const randomY = Math.random() * 75; // Adjust range as needed
      newElements.push({
        id: i,
        x: randomX,
        y: randomY,
      });
    }
    setElements(newElements);
  };

  //animating the text and the loading screen
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.to("#intro-slider", {
        opacity: 0,
        duration: 1.3,
        delay: 1,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3", "#title-container"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .from(["#first-container"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#intro-slider", "#title-container"], {
          scale: 0,
          visibility: "hidden",
          display: "none",
        });
    }, ref);
    // animationCircleFunc();
    // animateSquareFunc();
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <motion.div
      // variants={{
      //   hidden: { opacity: 0, y: 75 },
      //   visible: { opacity: 1, y: 0 },
      // }}
      // initial="hidden"
      // animate="visible"
      // transition={{ duration: 1.5, delay: 0.25 }}
      >
        <div className="h-screen  font-spaceGrotesk z-10  flex-col gap-10 tracking-tight">
          <div
            id="title-container"
            className=" fixed align-center h-screen bg-gray-50 justify-center z-10 font-spaceGrotesk w-full flex-col gap-10"
          >
            <h1 id="title-1" className="text-rose-600 text-center">
              Sweeten your day with a burst of fruity flavor and wholesome
              goodness.
            </h1>
            <h1 id="title-2" className="text-yellow-600 text-center">
              burst of fruity flavor and
            </h1>
            <h1 id="title-3" className="text-green-600 text-center">
              wholesome goodness.
            </h1>
          </div>
          <div id="first-container" className="h-screen">
            {/* <div className=" flex flex-row justify-around">
              <div id="square" className="w-24 h-24 z-20 bg-violet-500" />
              <div
                id="circle"
                className="w-24 h-24 z-20 rounded-full bg-violet-500"
              />
            </div> */}
            <h1 id="title-org" className=" text-center pt-10 pb-20 ">
              FRUCTEES
            </h1>
            {/* <FontAwesomeIcon icon={faHouse} className="text-violet-500" /> */}
            <div id="canvas-container" className="mb-10">
              <ThreejsImage />
            </div>
            <div id="stars-left">
              {elements.map((element) => (
                <FontAwesomeIcon
                  key={element.id}
                  icon={faStar}
                  id={`left-${element.id}`}
                  style={{
                    position: "absolute",
                    bottom: `${element.y}vh`,
                    left: `${element.x}vw`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="star text-yellow-300"
                />
              ))}
            </div>
            {/* <FontAwesomeIcon
              id="star"
              icon={faStar}
              className="text-violet-500"
            /> */}
            <div id="stars-right">
              {elements.map((element) => (
                <FontAwesomeIcon
                  key={element.id}
                  id={element.id}
                  icon={faStar}
                  style={{
                    position: "absolute",
                    bottom: `${element.y}vh`,
                    right: `${element.x}vw`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="star text-yellow-300"
                />
              ))}
            </div>
          </div>
          <div className="swiper-outer-container">
            <Swip />
          </div>
          <div
            id="second-container"
            className=" flex flex-row bg-yellow-300  justify-start z-10 w-full "
          >
            <motion.img
              src={wormCandies}
              animate={controlsImg}
              ref={imgRef}
              initial="hidden"
              variants={imgLeftVariants}
              alt="worm-candy"
              className="img-candy-container rounded"
            />
            <motion.img
              src={candyShapes}
              animate={controlsImg}
              ref={imgRef}
              initial="hidden"
              variants={imgRightVariants}
              alt="candy"
              className="img-candy-container rounded"
            />
          </div>
          <Flavors />
          <RecommendedProducts />
        </div>
      </motion.div>

      <div
        id="intro-slider"
        className=" h-screen flex bg-yellow-300 fixed top-0 w-screen justify-center z-10 place-items-center"
      >
        <h1
          id="welcom"
          className="text-6xl font-bold text-red-600 font-spaceGrotesk"
        >
          Brighten your world up with one bite
        </h1>
      </div>
    </div>
  );
}

export default App;
