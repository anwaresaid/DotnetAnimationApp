import { Canvas } from "@react-three/fiber";
import React from "react";
import CandyLogo from "./canvas/ThreeLogo";
import { OrbitControls, Stars } from "@react-three/drei";

function ThreejsImage() {
  const bgColor = ({ gl }) => {
    gl.setClearColor("#000000");
  };
  return (
    <Canvas
      id="canvas"
      style={{ position: "fixed" }}
      camera={{ position: [20, 3, 5], fov: 25 }}
      onCreated={bgColor}
    >
      <ambientLight intensity={2} />
      {/* 
      <pointLight intesity={2} color={0x61dbfb} position={[0, 5, 5]} />
      <spotLight intesity={1} color={0x61dbfb} position={[-20, 50, 10]} /> */}
      {/* <OrbitControls /> */}
      <Stars />
      <CandyLogo />
    </Canvas>
  );
}

export default ThreejsImage;
