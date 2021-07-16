import "./App.scss";
import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const SpinningMesh = ({ position, args }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} /> //x,y,z
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} />
        <SpinningMesh position={[-2, 1, -5]} />
        <SpinningMesh position={[5, 1, -2]} />
      </Canvas>
    </>
  );
}

export default App;
