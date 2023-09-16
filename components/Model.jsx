import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader  } from '@react-three/fiber'

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/dear.glb")
    return (
      <>
        <primitive position={[0, -0.5, 0]} object={gltf.scene} scale={.08} />
      </>
    )
}

export default Model