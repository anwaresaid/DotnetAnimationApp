import React, { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

const actionNames = ["Run1"];

function ThreeLogo() {
  const candyLogo = useGLTF("scene.gltf");
  const ref = useRef();

  const { actions, clips } = useAnimations(
    candyLogo.animations,
    candyLogo.scene
  );
  const scroll = useScroll();
  const tl = useRef();
  useEffect(() => {
    actionNames.forEach((clip) => {
      // const action = animations.actions[clip];
      // action.play();
      actions["Run1"].play().paused = true;
    });
  }, []);

  useFrame(() => {
    actions["Run1"].time = actions["Run1"].getClip().duration * scroll.offset;
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current
      .to(
        ref.current.position,
        {
          duration: 2,
          y: -2.3 * (3 - 1),
        },
        0
      )
      .from(
        ref.current.rotation,
        {
          duration: 2,
          y: Math.PI / 2,
        },
        0.5
      )
      .to(ref.current.position, {
        duration: 5,
        z: 10,
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
