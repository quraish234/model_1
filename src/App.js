import React from 'react';
import './App.css';
import {OrbitControls, Environment, Loader} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
//import {OrbitControls} from "@react-three/drei";
//import Model from './Components/Mode'
//import Model from './assets/models'
import Header from "./header";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

/* 
function Model(props){
    //const {scene} = useGLTF("/civic.glb");
    //const {scene} = useGLTF("/shirt.glb");
    //const {scene} = useGLTF("/quraish.glb");
    //const {scene} = useGLTF("/bmw.glb");
    const gltf = useLoader(GLTFLoader, "./untitled.gltf");
    return <primitive object={scene} {...props} /> 
  } */
  const Model = () => {
    const gltf = useLoader(GLTFLoader, "./untitled.gltf");
    //const gltf = useLoader(GLTFLoader, "./Poimandres.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={3} />
      </>
    );
  };
  
  export default function App() {
    return (
      <div className="App">
      <Header />
      <Canvas camera={{ position: [0, 5, 8] }}>
        
        <Suspense fallback={null}>
          <Model />
          <OrbitControls target={[0, 2.5, 0]} />
          <Environment preset="apartment" background={false} />
        </Suspense>
      </Canvas>
      <Loader></Loader>
    </div>
  );
  }

/* function App() {
  return (
    <div className="App">
      <h1>Cube Rotation</h1>
      <Model/>
    </div>
  );
}

export default App; */





//import React from 'react';
/* import {Text, View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
};

export default App; */

