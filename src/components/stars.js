import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import ModelLoader from "./canvasLoader";
import { Canvas, useFrame } from "@react-three/fiber";

const StarSets = () => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x -= (delta / 10) * (state.mouse.x * 10);
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <Suspense fallback={<ModelLoader />}>
      <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
        <OrbitControls enableZoom={false} />
        <Stars radius={300} />
      </group>
    </Suspense>
  );
};

const StarsLight = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarSets />
    </Canvas>
  );
};
export default StarsLight;
