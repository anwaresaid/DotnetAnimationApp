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
import CurvedText from "./components/curved/CurvedText.jsx";
import { Canvas } from "@react-three/fiber";
import CandyLogo from "./components/canvas/ThreeLogo.jsx";
import {
  OrbitControls,
  Scroll,
  ScrollControls,
  Stars,
} from "@react-three/drei";
import ColoredIntro from "./components/intro-colored/ColoredIntro.jsx";

function App() {
  // const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const imgFirstRef = useRef();
  const threeDRef = useRef();
  const isInView = useInView(ref);
  const isInViewThreeD = useInView(threeDRef);
  const isInViewImg = useInView(imgFirstRef, { amount: 0.5, once: true });
  const bgColor = ({ gl }) => {
    gl.setClearColor("#fef7e6");
  };

  const controlsImg = useAnimation();
  const controlsThreeD = useAnimation();

  const mainControls = useAnimation();
  const [elements, setElements] = useState([]);

  const imgLeftVariants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 50,
      y: 50,
    },
  };
  const imgRightVariants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
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
      <div className=" font-spaceGrotesk z-10  flex-col gap-10 tracking-tight">
        <div
          id="title-container"
          className=" fixed align-center h-screen bg-gray-50 justify-center z-10 font-spaceGrotesk w-full flex-col gap-10"
        >
          {/* <h1 id="title-1" className="text-rose-600 text-center">
            Sweeten your day with a burst of fruity flavor and wholesome
            goodness.
          </h1>
          <h1 id="title-2" className="text-yellow-600 text-center">
            burst of fruity flavor and
          </h1>
          <h1 id="title-3" className="text-green-600 text-center">
            wholesome goodness.
          </h1> */}
          <section>
            <ColoredIntro title={"INFUSED OF BIO ENERGY"} />
          </section>
        </div>
        {/* <div className=" flex flex-row justify-around">
              <div id="square" className="w-24 h-24 z-20 bg-violet-500" />
              <div
                id="circle"
                className="w-24 h-24 z-20 rounded-full bg-violet-500"
              />
            </div> */}

        {/* <FontAwesomeIcon icon={faHouse} className="text-violet-500" /> */}
        <div className="w-screen h-screen">
          <Canvas
            id="canvas"
            camera={{ position: [20, 3, 5], fov: 25 }}
            onCreated={bgColor}
          >
            <ScrollControls damping={0.2} pages={15}>
              <ambientLight intensity={2} />
              <CandyLogo />
              <Scroll html style={{ width: "100%" }}>
                <div id="first-container" className="h-screen w-screen ">
                  <h1 id="title-org" className=" text-center pt-10 pb-20 ">
                    FRUCTEES
                  </h1>
                </div>

                {/* 
      <pointLight intesity={2} color={0x61dbfb} position={[0, 5, 5]} />
      <spotLight intesity={1} color={0x61dbfb} position={[-20, 50, 10]} /> */}
                {/* <OrbitControls /> */}

                {/* <div id="stars-left">
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
                </div> */}

                <div className="swiper-outer-container">
                  <Swip />
                </div>

                <div
                  id="second-container"
                  className=" flex flex-row bg-yellow-300  justify-start  w-full "
                >
                  <motion.img
                    src={wormCandies}
                    animate={controlsImg}
                    initial="hidden"
                    ref={imgFirstRef}
                    alt="worm-candy"
                    className="img-candy-container rounded"
                  />
                  <motion.img
                    src={candyShapes}
                    animate={controlsImg}
                    initial="hidden"
                    alt="candy"
                    className="img-candy-container rounded"
                  />
                </div>

                <Flavors
                  title={"FLAVORS"}
                  text={
                    "FRESH, FRUITY, SPARKLING, BEAUTIFUL COLOURS, AWAKEN YOUR TASTE BUDS."
                  }
                  sub={"Recommended Products"}
                />

                <RecommendedProducts />

                <CurvedText />
              </Scroll>
            </ScrollControls>
          </Canvas>
        </div>
      </div>

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
