import "./App.scss";
import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const Box = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} /> //x,y,z
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.3} />
        <Box />
      </Canvas>
    </>
  );
}

export default App;
