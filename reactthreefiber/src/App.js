import "./App.scss";
import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const SpinningMesh = ({ position, args, color }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} /> //x,y,z
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} color="skyblue" />
        <SpinningMesh position={[-2, 1, -5]} color="lightpurple" />
        <SpinningMesh position={[5, 1, -2]} color="lightpurple" />
      </Canvas>
    </>
  );
}

export default App;
