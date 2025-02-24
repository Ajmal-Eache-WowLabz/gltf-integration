import {useGLTF} from '@react-three/drei/native';
import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';

import frame from '../assets/models/Double-sliding-frames.glb';
import windowParts from '../assets/models/Window_wow_variant_01.glb';
import fenestaWindow from '../assets/models/Fenesta_window.glb';
import windowPanels from '../assets/models/Window_panels_export_v2.glb';
import variant2 from '../assets/models/WOW_Variant_01.glb';
import updatedVariant from '../assets/models/Updated.glb';
import glass from '../assets/models/glass_window.glb';

import {DeviceEventEmitter} from 'react-native';
import Constants from '../constants';
import Bricks059_2K_Color from '../assets/models/Bricks059_2K_Color.jpg';

import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {useLoader} from '@react-three/fiber/native';

import double from '../assets/models/Double-sliding-frames.gltf';
import GLBViewer from './TempModel';

type ModelProps = {};

useGLTF.preload(frame);
useGLTF.preload(windowParts);
useGLTF.preload(fenestaWindow);
useGLTF.preload(windowPanels);
useGLTF.preload(variant2);
useGLTF.preload(updatedVariant);

// export function DoubleFrame(props: any) {
//   const {nodes, materials} = useGLTF(frame);
//   //const gltf = useLoader(GLTFLoader, double);

//   materials.Bricks.color = new THREE.Color('#ffffff');
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

export default function Model(props: ModelProps) {
  const sceneRef = useRef<any>();
  const frameRef = useRef();
  const railsRef = useRef<any>();
  const glassBorderRef = useRef<any>();
  const glassRef = useRef<any>();
  const handleRef = useRef<any>();
  const gltf = useGLTF(frame);
  const windowPartsGltf = useGLTF(windowParts);
  const fenestaWindowGltf = useGLTF(fenestaWindow);
  const windowPanelsGltf = useGLTF(windowPanels);
  const variant2Gltf = useGLTF(variant2);
  const updatedGltf = useGLTF(updatedVariant);
  const glassGltf = useGLTF(glass);

  console.log('Window ', gltf);
  console.log('Window Parts ', windowPartsGltf);
  console.log('Fenesta Window ', fenestaWindowGltf);
  console.log('Window panels ', windowPanelsGltf);
  console.log('Variant 2 ', variant2Gltf);
  console.log('Updated gltf ', updatedGltf);
  console.log('Glass ', glassGltf);

  // useEffect(() => {
  //   if (handleRef.current !== null) {
  //     handleRef.current.material.color = new THREE.Color('black');
  //   }
  // }, [handleRef]);

  // useEffect(() => {
  //   if (glassRef.current !== null) {
  //     glassRef.current.material = glassGltf.materials['Material.064'];
  //   }
  // }, [glassRef]);

  // useEffect(() => {
  //   DeviceEventEmitter.addListener(Constants.CHANGE_COLOR, (color: string) => {
  //     // console.log('Change color to ', color);
  //     // console.log('Ref ', sceneRef);
  //     // sceneRef.current.children[1].material.color = new THREE.Color(color);
  //     console.log('Mesh ref ', glassBorderRef);
  //     if (glassBorderRef.current !== null) {
  //       glassBorderRef.current.material.color = new THREE.Color(color);
  //     }

  //     if (railsRef.current !== null) {
  //       railsRef.current.material.color = new THREE.Color(color);
  //     }
  //   });
  // }, []);

  //gltf.scenes[0].caseShadow = true;
  //gltf.scene.children[0].material = fenestaWindowGltf.materials.Lock_mat;
  // const brown = new THREE.Color('#2e1c00');
  // gltf.scene.children[0].material.color = new THREE.Color('#2e1c00');
  // gltf.scene.children[1].material.color = new THREE.Color('yellow');
  // //gltf.nodes.Window_frame001.material.color = new THREE.Color('#36454F');

  // windowPartsGltf.nodes.mesh_5.material.color = new THREE.Color('#2e1c00');

  return (
    <group>
      {/* <DoubleFrame /> */}
      {/* <primitive
        ref={sceneRef}
        {...props}
        object={gltf.scene}
        position={[0, -1.05, -1]}
      /> */}
      {/* <primitive object={variant2Gltf.scene} /> */}
      {/* <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          {...props}
          geometry={gltf.scene.children[0].geometry}
          material={gltf.scene.children[0].material}
        />
        <mesh
          {...props}
          ref={railsRef}
          geometry={gltf.scene.children[1].geometry}
          position={[0, 8, -100]}
          //material={gltf.scene.children[1].material}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} position={[0, 130, 0]}>
        <mesh
          {...props}
          ref={glassBorderRef}
          geometry={windowPartsGltf.nodes.mesh_5.geometry}
          //material={windowPartsGltf.nodes.mesh_5.material}
        />
        <mesh
          {...props}
          ref={glassRef}
          geometry={windowPartsGltf.nodes.mesh_5_1.geometry}
          // material={windowPartsGltf.nodes.mesh_5_1.material}
        />
        <mesh
          {...props}
          ref={handleRef}
          geometry={windowPartsGltf.nodes.mesh_5_2.geometry}
          //material={windowPartsGltf.nodes.mesh_5_2.material}
        />
      </group> */}
      {/* <primitive {...props} object={windowPartsGltf.nodes.mesh_5} /> */}
      {/* <primitive {...props} object={windowPartsGltf.nodes.mesh_5_1} /> */}
      {/* <primitive {...props} object={fenestaWindowGltf.nodes.mesh_5_2} /> */}
      {/* <primitive
        {...props}
        object={windowPanelsGltf.scene}
        position={[0, -1.05, -1]}
      /> */}
      {/* <primitive
        ref={frameRef}
        {...props}
        object={gltf.nodes.Window_frame001}
      />
      <primitive {...props} object={gltf.nodes.Window_rail001} /> */}
      <GLBViewer />
    </group>
  );
}
