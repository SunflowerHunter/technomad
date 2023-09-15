import { 
    EffectComposer, 
    DepthOfField, 
    Bloom, 
    Noise, 
    Vignette,
    Glitch
  } from '@react-three/postprocessing'
  
  const Effects = () => {
    return (
      <EffectComposer>
        {/*
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
          <Glitch />
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
          
        */}
        
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={200} />
        <Noise opacity={0.2} />
      </EffectComposer>
    )
  }
  export default Effects