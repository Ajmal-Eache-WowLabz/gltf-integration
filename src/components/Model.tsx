import {useGLTF} from '@react-three/drei/native';
import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';

import frame from '../assets/models/Double-sliding-frames.glb';
import windowParts from '../assets/models/Window_wow_variant_01.glb';
import fenestaWindow from '../assets/models/Fenesta_window.glb';
import {DeviceEventEmitter} from 'react-native';
import Constants from '../constants';

type ModelProps = {};

// export function DoubleFrame(props: any) {
//   const {nodes, materials} = useGLTF(frame);

//   materials.Mat_3.color = new THREE.Color('#2e1c00');

//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Window_frame001.geometry}
//         material={materials.Bricks}
//         position={[-0.025, -1.329, 1.075]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={0.002}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Window_rail001.geometry}
//         material={materials.Mat_3}
//         position={[-0.017, -1.111, 1.094]}
//         rotation={[Math.PI / 2, 0, 0]}
//         scale={0.002}
//       />
//     </group>
//   );
// }

// useGLTF.preload(frame);
// useGLTF.preload(windowParts);
// useGLTF.preload(fenestaWindow);

export default function Model(props: ModelProps) {
  const sceneRef = useRef<any>();
  const frameRef = useRef();
  const gltf = useGLTF(frame);
  const windowPartsGltf = useGLTF(windowParts);
  const fenestaWindowGltf = useGLTF(fenestaWindow);

  console.log('Window ', gltf);
  console.log('Window Parts ', windowPartsGltf);
  console.log('Fenesta Window ', fenestaWindowGltf);

  useEffect(() => {
    DeviceEventEmitter.addListener(Constants.CHANGE_COLOR, (color: string) => {
      console.log('Change color to ', color);
      console.log('Ref ', sceneRef);
      sceneRef.current.children[1].material.color = new THREE.Color(color);
    });
  }, []);

  //gltf.scenes[0].caseShadow = true;
  //gltf.scene.children[0].material = fenestaWindowGltf.materials.Lock_mat;
  gltf.scene.children[0].material.color = new THREE.Color('#FFFFFF');
  gltf.scene.children[1].material.color = new THREE.Color('yellow');
  //gltf.nodes.Window_frame001.material.color = new THREE.Color('#36454F');

  return (
    <group>
      {/* <DoubleFrame /> */}
      <primitive
        ref={sceneRef}
        {...props}
        object={gltf.scene}
        position={[0, -1.05, -1]}
      />
      {/* <primitive
        ref={frameRef}
        {...props}
        object={gltf.nodes.Window_frame001}
      />
      <primitive {...props} object={gltf.nodes.Window_rail001} /> */}
    </group>
  );
}
