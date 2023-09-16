import React, { useEffect, useRef, useMemo, useState } from 'react'
import { Canvas, useThree, useFrame, useLoader, extend, Object3DNode } from '@react-three/fiber'
import * as THREE from 'three'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'


import Effects from '../components/Effects'
import Model from '../components/Model'
import Media from '../components/Media'


const App = () => {
    return (
        <div className="w-screen h-screen border-red-700 border-0">
            <div className="w-3/4 h-screen border-red-700 border-4">
                
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
            {/*
            */}
            <Media/>
            <div className="fixed right-0 top-0 w-1/4 h-3/4 bg-cyan-400 border-4 border-blue-700">
                Future blog ig or smth
                <p>and music updates maybe</p>
            </div>
        </div>
      
    )
  }
  
  export default App