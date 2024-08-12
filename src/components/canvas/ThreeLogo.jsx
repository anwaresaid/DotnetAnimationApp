import React, { useEffect, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const actionNames = ["Run1"];

function ThreeLogo() {
  const candyLogo = useGLTF("scene.gltf");

  const animations = useAnimations(candyLogo.animations, candyLogo.scene);

  useEffect(() => {
    actionNames.forEach((clip) => {
      const action = animations.actions[clip];
      action.play();
    });
  }, [animations]);

  return (
    <mesh>
      <primitive object={candyLogo.scene} rotation={[0, 0, 0]} scale={1} />
    </mesh>
  );
}

export default ThreeLogo;
