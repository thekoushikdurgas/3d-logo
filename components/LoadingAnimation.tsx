
import React, { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const Crystal: React.FC<{ position: THREE.Vector3, scale: number, rotationSpeed: number }> = ({ position, scale, rotationSpeed }) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y += 0.01 * rotationSpeed;
    ref.current.rotation.x += 0.005 * rotationSpeed;
    ref.current.position.y = position.y + Math.sin(time + position.x) * 0.2;
  });

  return (
    <Icosahedron ref={ref} args={[1, 0]} position={position} scale={scale}>
      <meshStandardMaterial color="#ff6b00" emissive="#ff6b00" emissiveIntensity={0.5} roughness={0.1} metalness={0.9} />
    </Icosahedron>
  );
};

const LoadingAnimation: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const { viewport, mouse } = useThree();

  const crystals = useMemo(() => {
    const count = 50;
    return Array.from({ length: count }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10 - 5
      ),
      scale: 0.1 + Math.random() * 0.3,
      rotationSpeed: Math.random() * 2 + 1,
    }));
  }, []);

  useFrame(() => {
    const x = (mouse.x * viewport.width) / 5;
    const y = (mouse.y * viewport.height) / 5;
    groupRef.current.position.lerp(new THREE.Vector3(x, y, 0), 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (mouse.x * Math.PI) / 20, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (mouse.y * Math.PI) / 20, 0.05);
  });

  return (
    <group ref={groupRef}>
      {crystals.map((crystal, i) => (
        <Crystal key={i} {...crystal} />
      ))}
    </group>
  );
};

export default LoadingAnimation;
