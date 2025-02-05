import {Canvas} from '@react-three/fiber/native';
import {OrbitControls, Stage} from '@react-three/drei/native';
import React, {Suspense} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Model from './src/components/Model';
import ConfiguratorView from './src/components/ConfiguratorView';

function ConfiguratorStage() {
  return (
    <>
      <Stage intensity={1} adjustCamera={0.6} environment={null}>
        <Suspense>
          <Model />
        </Suspense>
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E6E6E6'}}>
      <View style={{flex: 1}}>
        <Canvas
          style={{flex: 0.8, backgroundColor: '#E6E6E6'}}
          shadows
          camera={{position: [6, 0, 0]}}>
          <ConfiguratorStage />
        </Canvas>
      </View>
      <ConfiguratorView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
