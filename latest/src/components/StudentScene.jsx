import { useRef, Suspense, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three';

// Student holding books - placeholder model
const StudentWithBooks = () => {
  const group = useRef();
  const headRef = useRef();
  const leftHandRef = useRef();
  const rightHandRef = useRef();
  const book1Ref = useRef();
  const book2Ref = useRef();
  
  const { mouse } = useThree();
  
  useFrame(() => {
    // Head follows cursor smoothly
    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        mouse.x * 0.6,
        0.1
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        -mouse.y * 0.4,
        0.1
      );
    }
    
    // Gentle floating animation
    if (group.current) {
      group.current.position.y = Math.sin(Date.now() * 0.001) * 0.05;
    }
    
    // Books slight rotation
    if (book1Ref.current) {
      book1Ref.current.rotation.y += 0.002;
    }
    if (book2Ref.current) {
      book2Ref.current.rotation.y -= 0.002;
    }
  });

  return (
    <group ref={group} position={[0, -0.8, 0]} scale={1.5}>
      {/* Body/Torso */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[0.5, 0.9, 0.35]} />
        <meshStandardMaterial color="#ea580c" roughness={0.6} metalness={0.1} />
      </mesh>
      
      {/* Head */}
      <group ref={headRef} position={[0, 1.35, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshStandardMaterial color="#fdba74" roughness={0.5} />
        </mesh>
        {/* Eyes */}
        <mesh position={[-0.1, 0.05, 0.26]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#1a202c" />
        </mesh>
        <mesh position={[0.1, 0.05, 0.26]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#1a202c" />
        </mesh>
        {/* Smile */}
        <mesh position={[0, -0.08, 0.24]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.05, 0.12, 16]} />
          <meshStandardMaterial color="#1a202c" side={THREE.DoubleSide} />
        </mesh>
      </group>
      
      {/* Left Arm (holding book) */}
      <group ref={leftHandRef} position={[-0.35, 0.4, 0]} rotation={[0, 0, 0.4]}>
        <mesh castShadow>
          <boxGeometry args={[0.12, 0.5, 0.12]} />
          <meshStandardMaterial color="#f97316" roughness={0.6} />
        </mesh>
        {/* Book in left hand */}
        <group ref={book1Ref} position={[-0.15, -0.15, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.25, 0.35, 0.08]} />
            <meshStandardMaterial color="#fb923c" roughness={0.5} />
          </mesh>
          {/* Book pages */}
          <mesh position={[0, 0, 0.045]}>
            <boxGeometry args={[0.23, 0.33, 0.01]} />
            <meshStandardMaterial color="#fff7ed" roughness={0.3} />
          </mesh>
        </group>
      </group>
      
      {/* Right Arm (holding book) */}
      <group ref={rightHandRef} position={[0.35, 0.4, 0]} rotation={[0, 0, -0.4]}>
        <mesh castShadow>
          <boxGeometry args={[0.12, 0.5, 0.12]} />
          <meshStandardMaterial color="#f97316" roughness={0.6} />
        </mesh>
        {/* Book in right hand */}
        <group ref={book2Ref} position={[0.15, -0.15, 0]}>
          <mesh castShadow>
            <boxGeometry args={[0.25, 0.35, 0.08]} />
            <meshStandardMaterial color="#ea580c" roughness={0.5} />
          </mesh>
          {/* Book pages */}
          <mesh position={[0, 0, 0.045]}>
            <boxGeometry args={[0.23, 0.33, 0.01]} />
            <meshStandardMaterial color="#fff7ed" roughness={0.3} />
          </mesh>
        </group>
      </group>
      
      {/* Legs */}
      <mesh position={[-0.12, -0.3, 0]} castShadow>
        <boxGeometry args={[0.18, 0.5, 0.18]} />
        <meshStandardMaterial color="#c2410c" roughness={0.7} />
      </mesh>
      <mesh position={[0.12, -0.3, 0]} castShadow>
        <boxGeometry args={[0.18, 0.5, 0.18]} />
        <meshStandardMaterial color="#c2410c" roughness={0.7} />
      </mesh>
      
      {/* Shoes */}
      <mesh position={[-0.12, -0.6, 0.05]} castShadow>
        <boxGeometry args={[0.2, 0.08, 0.25]} />
        <meshStandardMaterial color="#1a202c" roughness={0.8} />
      </mesh>
      <mesh position={[0.12, -0.6, 0.05]} castShadow>
        <boxGeometry args={[0.2, 0.08, 0.25]} />
        <meshStandardMaterial color="#1a202c" roughness={0.8} />
      </mesh>
    </group>
  );
};

// GLB Student Model with Head Tracking
const GLBStudent = ({ modelPath }) => {
  const gltf = useGLTF(modelPath);
  const { scene } = gltf;
  const headBoneRef = useRef(null);
  const { mouse } = useThree();
  
  // Find head bone on mount
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        const name = child.name.toLowerCase();
        if ((name.includes('head') || name.includes('neck')) && !headBoneRef.current) {
          if (child.type === 'Bone' || child.type === 'Object3D' || child.type === 'Mesh') {
            headBoneRef.current = child;
          }
        }
      });
    }
  }, [scene]);
  
  useFrame(() => {
    if (headBoneRef.current) {
      headBoneRef.current.rotation.y = THREE.MathUtils.lerp(
        headBoneRef.current.rotation.y,
        mouse.x * 0.6,
        0.1
      );
      headBoneRef.current.rotation.x = THREE.MathUtils.lerp(
        headBoneRef.current.rotation.x,
        -mouse.y * 0.4,
        0.1
      );
    }
  });
  
  return <primitive object={scene} scale={1.2} position={[0, -0.8, 0]} />;
};

// Additional floating books around student
const FloatingBook = ({ position, color }) => {
  const mesh = useRef();
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + position[0]) * 0.08;
      mesh.current.rotation.y += 0.005;
    }
  });
  
  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.2}>
      <mesh ref={mesh} position={position} castShadow>
        <boxGeometry args={[0.3, 0.04, 0.25]} />
        <meshStandardMaterial color={color} roughness={0.4} />
      </mesh>
    </Float>
  );
};

// Main Scene Component
function StudentScene({ useGLB = false, glbPath = '/models/student.glb' }) {
  return (
    <>
      {/* Lighting Setup */}
      <ambientLight intensity={0.7} />
      <directionalLight
        position={[4, 4, 4]}
        intensity={1.1}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={10}
        shadow-camera-left={-2}
        shadow-camera-right={2}
        shadow-camera-top={2}
        shadow-camera-bottom={-2}
      />
      <directionalLight position={[-3, 3, 2]} intensity={0.5} />
      <pointLight position={[0, 2, 4]} intensity={0.6} color="#fff7ed" />
      <pointLight position={[-2, 1, 2]} intensity={0.3} color="#fed7aa" />
      
      {/* Student Model */}
      {useGLB ? (
        <Suspense fallback={<StudentWithBooks />}>
          <GLBStudent modelPath={glbPath} />
        </Suspense>
      ) : (
        <StudentWithBooks />
      )}
      
      {/* Floating Books around student */}
      <FloatingBook position={[-1.5, 0.8, 0.6]} color="#ea580c" />
      <FloatingBook position={[1.5, 0.6, 0.4]} color="#f97316" />
      <FloatingBook position={[0, 1.2, -0.6]} color="#fb923c" />
      
      {/* Ground plane for shadows */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.25} />
      </mesh>
    </>
  );
}

export default StudentScene;
