import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import ModelLoader from "./canvasLoader";

const Computer = () => {
  // const computerModel = useGLTF("./desktop_pc/scene.gltf");

  return (
    <Suspense fallback={<ModelLoader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate={true}
      />{" "}
      <mesh>
        <directionalLight postion={[10, 10, 5]} intensity={1} />
        <ambientLight intensity={1} />
        <pointLight intensity={1} />
        {/* <primitive
          object={computerModel.scene}
          scale={1}
          position={[0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        /> */}
      </mesh>
    </Suspense>
  );
};

const ComputerModel = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Computer />

      <Preload all />
    </Canvas>
  );
};
export default ComputerModel;
