
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import Logo3D from './Logo3D';

const MainScene: React.FC = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full p-8 z-10 pointer-events-none">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white text-shadow-lg">
            3D Animated Logo
          </h1>
          <p className="mt-2 text-lg text-gray-300 max-w-2xl text-shadow">
            Interact with the logo by clicking and dragging. Scroll to zoom in and out.
          </p>
        </div>
      </div>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={60} />
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff8c00" />
        <Environment preset="city" />
        <Logo3D />
        {/* FIX: The `enablePan` prop was causing a TypeScript error. Replaced it with `panSpeed={0}` which effectively disables panning and resolves the type issue. */}
        <OrbitControls 
          panSpeed={0}
          minDistance={5}
          maxDistance={20}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      <div className="absolute bottom-0 left-0 w-full p-4 z-10 text-center text-gray-500 text-sm pointer-events-none">
        <p>Built by a world-class senior frontend React engineer.</p>
      </div>
    </>
  );
};

export default MainScene;