'use client';

import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

function LoadingFallback() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#333333" />
    </mesh>
  );
}

function BatmobileModel({ wireframe = false }) {
  const [modelError, setModelError] = useState(false);
  
  useEffect(() => {
    // Preload the model
    useGLTF.preload('/Armored_Night_Cruiser_0530161757_texture.glb');
  }, []);

  try {
    const { scene } = useGLTF('/Armored_Night_Cruiser_0530161757_texture.glb');
    
    if (!scene) {
      throw new Error('Model failed to load');
    }

    return (
      <primitive 
        object={scene} 
        scale={2}
        position={[0, -1, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />
    );
  } catch (e) {
    console.error('Error loading model:', e);
    setModelError(true);
    return <LoadingFallback />;
  }
}

export default function BatmobileCanvas() {
  return (
    <div className="w-full h-screen relative bg-black">
      <Canvas
        camera={{ position: [5, 2, 5], fov: 50 }}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          background: 'black'
        }}
      >
        <color attach="background" args={['#000000']} />
        <Suspense fallback={<LoadingFallback />}>
          <BatmobileModel />
          <Environment preset="night" />
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
      </Canvas>
    </div>
  );
}