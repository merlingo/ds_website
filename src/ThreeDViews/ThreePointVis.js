import * as React from 'react';
import {Canvas } from 'react-three-fiber';
import Controls from './Controls';

const ThreePointVis = ({})=>
{
    return (
        <Canvas camera = {{ position:[0,0,0.5]}}>
            <Controls />
            <ambientLight color="#ffffff" intensity={0.1} />
            <hemisphereLight 
                color="#ffffff"
                skycolor="#ffffbb"
                groundColor="#080820"
                />
            <mesh position={[0,0,0]} rotation={[Math.PI*0.5,0,0]}>
                <cylinderBufferGeometry attach="geometry" args={[0.5,0.5,0.15,32]} />
                <meshStandardMaterial />
            </mesh> 
        </Canvas>
    );
}

export default ThreePointVis;