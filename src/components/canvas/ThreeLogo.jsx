import React, { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame, useThree } from "@react-three/fiber";

const actionNames = ["Run1"];

function ThreeLogo() {
  const candyLogo = useGLTF("scene.gltf");
  const ref = useRef();

  const { actions, clips } = useAnimations(
    candyLogo.animations,
    candyLogo.scene
  );
  const scroll = useScroll();
  const threeJsCheck = useThree();
  const tl = useRef();
  useEffect(() => {
    console.log("useThree", threeJsCheck);
    console.log("scroll", scroll);
    actionNames.forEach((clip) => {
      // const action = animations.actions[clip];
      // action.play();
    });
  }, [scroll]);

  useFrame(() => {
    actions["Run1"].play();
    // console.log("scroll-------", scroll.offset * tl.current.duration());
    tl.current.seek(scroll.offset * tl.current.duration() * 1.5);
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current
      .from(
        ref.current.rotation,
        {
          duration: 0.2,
          y: Math.PI / 2,
        },
        0
      )
      .to(ref.current.position, {
        duration: 0.2,
        z: 5,
      })
      .to(ref.current.rotation, {
        duration: 0.2,
        y: Math.PI,
      })
      .to(ref.current.position, {
        duration: 0.2,
        z: 0,
      })
      .to(ref.current.rotation, {
        duration: 0.2,
        y: Math.PI / 2,
      })
      .to(ref.current.position, {
        opacity: 0,
        duration: 0.2,
      });
  }, []);
  return (
    <group ref={ref}>
      <mesh>
        <primitive object={candyLogo.scene} scale={1} position={[0, -1, 0]} />
      </mesh>
    </group>
  );
}

export default ThreeLogo;
