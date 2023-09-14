import { Canvas } from "@react-three/fiber";

import moonColor from "../assets/texture/moon_depth.jpg";
import moonDisplacement from "../assets/texture/moon_surface.jpg";
import { OrbitControls, useTexture, Decal, Float } from "@react-three/drei";
import docker from "../assets/imgs/docker.png";

const StackSphere = ({ stackIcon }) => {
  const [colorMap, displacementMap] = useTexture([moonColor, moonDisplacement]);
  const [stackImg] = useTexture([stackIcon]);
  return (
    <mesh scale={1.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color={"white"}
        metalness={0.5}
        roughness={0.2}
        map={colorMap}
        envMapIntensity={0.4}
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1.5}
        map={stackImg}
        flatShading
      />
    </mesh>
  );
};

const Stacks = ({ stackIcon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      {" "}
      <OrbitControls enableZoom={false} />
      <directionalLight postion={[10, 10, 5]} intensity={1} />
      <ambientLight intensity={2} />
      <StackSphere stackIcon={stackIcon} />
    </Canvas>
  );
};

export default Stacks;
