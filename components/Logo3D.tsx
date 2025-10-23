
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox, Ring } from '@react-three/drei';
import * as THREE from 'three';

const Logo3D: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const textRefHe = useRef<any>(null);
  const textRefKoushik = useRef<any>(null);
  const textRefUrgas = useRef<any>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      groupRef.current.rotation.y = time * 0.2;
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }
    // Make text always face the camera
    if (textRefHe.current && textRefKoushik.current && textRefUrgas.current) {
      textRefHe.current.quaternion.copy(state.camera.quaternion);
      textRefKoushik.current.quaternion.copy(state.camera.quaternion);
      textRefUrgas.current.quaternion.copy(state.camera.quaternion);
    }
  });

  const orangeMaterial = <meshStandardMaterial color="#ff6b00" roughness={0.2} metalness={0.8} />;
  const redMaterial = <meshStandardMaterial color="#4d0000" roughness={0.4} metalness={0.5} />;

  return (
    <group ref={groupRef} scale={1.2} position={[0, 0, 0]}>
      {/* Background Circle */}
      <mesh rotation={[0, 0, 0]} position={[0, 0, -0.2]}>
        <cylinderGeometry args={[3, 3, 0.3, 64]} />
        {redMaterial}
      </mesh>
      <Ring args={[3.05, 3.2, 64]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.16, 0]}>
        {orangeMaterial}
      </Ring>
        <Ring args={[3.05, 3.2, 64]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.16, 0]}>
        {orangeMaterial}
      </Ring>

      {/* Stylized 'K' Pickaxe Shape */}
      <group>
        {/* Main vertical bar */}
        <RoundedBox args={[0.5, 4, 0.5]} radius={0.1} position={[-0.9, 0, 0]}>
          {orangeMaterial}
        </RoundedBox>
        
        {/* Upper diagonal */}
        <RoundedBox args={[0.5, 2.8, 0.5]} radius={0.1} position={[0.2, 0.9, 0]} rotation={[0, 0, -Math.PI / 4]}>
          {orangeMaterial}
        </RoundedBox>

        {/* Lower diagonal */}
        <RoundedBox args={[0.5, 2.8, 0.5]} radius={0.1} position={[0.2, -0.9, 0]} rotation={[0, 0, Math.PI / 4]}>
          {orangeMaterial}
        </RoundedBox>

        {/* Handle end */}
        <RoundedBox args={[0.6, 1.2, 0.6]} radius={0.2} position={[1.4, -2.1, 0]} rotation={[0,0, Math.PI/4]}>
             {orangeMaterial}
        </RoundedBox>
      </group>

      {/* 3D Text Elements */}
      <group>
        <Text
          ref={textRefHe}
          position={[-0.9, 0.5, 0.3]}
          fontSize={0.4}
          color="#111827"
          anchorX="center"
          anchorY="middle"
          rotation={[0,0,Math.PI / 2]}
        >
          HE
        </Text>
        <Text
          ref={textRefKoushik}
          position={[0.2, -0.9, 0.3]}
          fontSize={0.4}
          color="#111827"
          anchorX="center"
          anchorY="middle"
          rotation={[0,0,-Math.PI/4]}
        >
          KOUSHIK
        </Text>
         <Text
          ref={textRefUrgas}
          position={[2.3, 0.9, 0.3]}
          fontSize={0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
          rotation={[0,0,-Math.PI/2]}
        >
          URGAS
        </Text>
      </group>
    </group>
  );
};

export default Logo3D;
