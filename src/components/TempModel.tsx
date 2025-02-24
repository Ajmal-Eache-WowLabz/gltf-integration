import React, {useRef, useEffect} from 'react';
import {View} from 'react-native';
import {GLView} from 'expo-gl';
import {Renderer} from 'expo-three';
import {
  PerspectiveCamera,
  Scene,
  AmbientLight,
  DirectionalLight,
  Color,
} from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

const GLBViewer = () => {
  const glRef = useRef(null);

  let animationFrameId: any;

  const onContextCreate = async (gl: any) => {
    glRef.current = gl;

    // Create WebGL renderer
    const renderer = new Renderer({gl});
    renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
    renderer.setClearColor(new Color(0x202020)); // Set background color

    // Set up camera
    const camera = new PerspectiveCamera(
      75,
      gl.drawingBufferWidth / gl.drawingBufferHeight,
      0.1,
      100,
    );
    camera.position.set(0, 1, 3); // Adjust position to see the model

    // Create scene
    const scene = new Scene();

    // Add lighting
    const ambientLight = new AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load GLB model
    const loader = new GLTFLoader();
    loader.load(
      require('../assets/models/WOW_Variant_01.glb'), // Test with this URL
      gltf => {
        const model = gltf.scene;
        model.position.set(0, -1, 0); // Adjust position to be visible
        scene.add(model);

        // Render loop
        const renderLoop = () => {
          animationFrameId = requestAnimationFrame(renderLoop);
          model.rotation.y += 0.01; // Rotate model
          renderer.render(scene, camera);
          gl.endFrameEXP(); // Required for React Native GLView
        };

        renderLoop();
      },
      undefined,
      error => console.error('Error loading GLB model:', error),
    );
  };

  useEffect(() => {
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      <GLView style={{flex: 1}} onContextCreate={onContextCreate} />
    </View>
  );
};

export default GLBViewer;
