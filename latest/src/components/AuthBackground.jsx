import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingShape({ children, position, speed = 0.2, scale = 1 }) {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime * speed;
    group.current.rotation.y = t * 0.15;
    group.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    group.current.position.y = position[1] + Math.sin(t * 0.5) * 0.03;
  });
  return (
    <group ref={group} position={position} scale={scale}>
      {children}
    </group>
  );
}

function AuthScene() {
  const materialProps = {
    transparent: true,
    opacity: 0.12,
    depthWrite: false,
    side: THREE.DoubleSide,
  };

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} intensity={0.4} />

      <FloatingShape position={[-1.8, 0.2, -2]} speed={0.25} scale={0.5}>
        <mesh>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshBasicMaterial color="#f97316" {...materialProps} />
        </mesh>
      </FloatingShape>

      <FloatingShape position={[2, -0.3, -2.5]} speed={0.2} scale={0.6}>
        <mesh>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color="#ea580c" {...materialProps} />
        </mesh>
      </FloatingShape>

      <FloatingShape position={[-0.5, 0.8, -1.5]} speed={0.3} scale={0.4}>
        <mesh>
          <torusGeometry args={[0.35, 0.12, 16, 32]} />
          <meshBasicMaterial color="#fb923c" {...materialProps} />
        </mesh>
      </FloatingShape>

      <FloatingShape position={[1.2, 0.5, -2.2]} speed={0.22} scale={0.45}>
        <mesh>
          <octahedronGeometry args={[0.4, 0]} />
          <meshBasicMaterial color="#c2410c" {...materialProps} />
        </mesh>
      </FloatingShape>

      <FloatingShape position={[-1, -0.6, -1.8]} speed={0.28} scale={0.35}>
        <mesh>
          <cylinderGeometry args={[0.25, 0.25, 0.5, 32]} />
          <meshBasicMaterial color="#fdba74" {...materialProps} />
        </mesh>
      </FloatingShape>

      <FloatingShape position={[0.6, -0.5, -2.8]} speed={0.18} scale={0.5}>
        <mesh>
          <dodecahedronGeometry args={[0.3, 0]} />
          <meshBasicMaterial color="#ea580c" {...materialProps} />
        </mesh>
      </FloatingShape>

      <FloatingShape position={[-2, 0.6, -3]} speed={0.24} scale={0.3}>
        <mesh>
          <icosahedronGeometry args={[0.35, 0]} />
          <meshBasicMaterial color="#fb923c" {...materialProps} />
        </mesh>
      </FloatingShape>

      <FloatingShape position={[1.8, -0.2, -1.6]} speed={0.26} scale={0.4}>
        <mesh>
          <torusKnotGeometry args={[0.2, 0.08, 64, 16]} />
          <meshBasicMaterial color="#fdba74" {...materialProps} />
        </mesh>
      </FloatingShape>
    </>
  );
}

export default function AuthBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 2], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        className="!absolute inset-0 w-full h-full"
      >
        <Suspense fallback={null}>
          <AuthScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
