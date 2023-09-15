import React, { useEffect, useRef, useMemo, useState } from 'react'
import { Canvas, useFrame, useLoader, extend, Object3DNode } from '@react-three/fiber'
import * as THREE from 'three'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei'


import Effects from '../components/Effects'



/*declare module '@react-three/fiber' {
* interface ThreeElements {
*   textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>
*   }
* }
*/


const Model = () => {
  const gltf = useLoader(GLTFLoader, "/dear.glb")
  return (
    <>
      <primitive position={[0, -1, 0]} object={gltf.scene} scale={.08} />
    </>
  )
}


const App = () => {
    return (
      <div className="canvas-container">
  
        <h1>Coming soon</h1>
  
        
        <Canvas
          camera={{ position: [6, 0, 1], fov: 50 }}
        >
          <OrbitControls />
          <ambientLight intensity={0.02}/>
          <Suspense>
            <Model />
          </Suspense>
  
          {/*
            <pointLight position={[10, 0, 1]} />
          
        */}
            <directionalLight color="#ed1317" intensity={2.0}/> 
            
            <Effects />
          
        </Canvas>
        
  
      </div>
    )
  }
  
  export default App