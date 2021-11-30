import * as React from 'react';
import {extend, useThree, useFrame } from 'react-three-fiber';
import {TrackballControls} from "three/examples/jsm/controls/TrackballControls";
import * as THREE from 'three';

extend({ TrackballControls});

const alt_key = 18;
const CTRL_KEY = 17;
const CMD_KEY = 91;

const Controls = ({}) => {

    const controls = React.useRef();
    const {camera, gl} = useThree();

    useFrame(() => {
        controls.current.update();

    });

    return (
        <trackballControls 
        ref = {controls}
        args = {[camera, gl.domElement]}
        dynamicDampingFactor = {0.1}
        keys ={[alt_key, CTRL_KEY, CMD_KEY]}
        mouseButton = {{
            LEFT: THREE.MOUSE.PAN,
            MIDDLE: THREE.MOUSE.ZOOM,
            RIGHT: THREE.MOUSE.ROTATE
        }}
        />        
    );
}

export default Controls;
