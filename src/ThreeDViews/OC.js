import React, { Suspense, useRef, useEffect } from "react";
import {
  Canvas,
  useLoader,
  useFrame,
  extend,
  useThree
} from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Calling extend with the native OrbitControls class from Three.js
// will make orbitControls available as a native JSX element.
// Notice how the OrbitControls classname becomes lowercase orbitControls when used as JSX element.
extend({ OrbitControls });

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

function ArWing() {
  const group = useRef();
  //const { nodes } = useLoader(GLTFLoader, "./dragon1.glb");
  const gltf = useLoader(GLTFLoader, './dragon1.glb' );

  return (
    <group ref={group}>
        <primitive   object={gltf.scene} rotation={[0, 0, 0]}  position={[0, 0, 0]}>
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={0.3}
          metalness={0.3}
        />      </primitive>
      
    </group>
  );
}

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement }
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame(state => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
      autoRotate={true}
      maxPolarAngle={Math.PI}
      minPolarAngle={0}
    />
  );
};
export default function OC() {
  return (
    <>
      <Canvas >
        <CameraControls />
        <directionalLight intensity={0.5} />
        <Suspense fallback={<Loading />}>
          <ArWing />
        </Suspense>

      </Canvas>
     
    </>
  );
}