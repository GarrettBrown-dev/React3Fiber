import "./App.scss";
import React from "react";
import { Canvas } from "react-three-fiber";

function App() {
  return (
    <>
      <Canvas>
        <mesh>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} /> //x,y,z
          <meshStandardMaterial attach="material" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
