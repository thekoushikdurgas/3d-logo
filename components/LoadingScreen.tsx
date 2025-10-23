
import React from 'react';
import { Canvas } from '@react-three/fiber';
import LoadingAnimation from './LoadingAnimation';

const LoadingScreen: React.FC = () => {
  return (
    <div className="w-full h-full relative text-white bg-gray-900">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff8c00" />
        <LoadingAnimation />
      </Canvas>
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
        <p className="text-xl font-bold text-gray-100 animate-pulse drop-shadow-lg [text-shadow:_0_2px_4px_rgb(0_0_0_/_50%)]">
          Initializing 3D Experience...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
