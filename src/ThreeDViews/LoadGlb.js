import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import React, { Component, Suspense, useRef, useState } from 'react';
import {Canvas, useLoader, useFrame } from 'react-three-fiber';
import * as THREE from "three";
//import duck from './poly.glb'


function Duck() {
    const gltf = useLoader(GLTFLoader, './dragon1.glb' );
    return <primitive  object={gltf.scene} position={[0, 0, 0]} />
  }
  function Box() {
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" transparent opacity={0.5} />
      </mesh>
    )
  }

  const Scene = ({ x, y, z }) => {
    const box = useRef();
    const vec = new THREE.Vector3(x, y, z);
    useFrame(() => box.current.position.lerp(vec, 0.1));
    const gltf = useLoader(GLTFLoader, './dragon1.glb' );
    
    return (
      <primitive ref={box}  object={gltf.scene}  >
        <meshLambertMaterial attach="material" color="white" />
      </primitive>
    );
  };
export default function LoadGlb()
{
    const [position, setPosition] = useState({ x: 1, y: 0, z: 0 });
    const { x, y, z } = position;
    return (
      <>
        <div className="controls">
          <label>x</label>
          <input
            onChange={(e) => setPosition({ ...position, x: e.target.value })}
            value={position.x}
            type="number"
          />
          <label>y</label>
          <input
            onChange={(e) => setPosition({ ...position, y: e.target.value })}
            value={position.y}
            type="number"
          />
          <label>z</label>
          <input
            onChange={(e) => setPosition({ ...position, z: e.target.value })}
            value={position.z}
            type="number"
          />
        </div>
        <Canvas>
          <ambientLight intensity={0.5} />
          <Scene x={x} y={y} z={z} />
        </Canvas>
      </>
    );

}

