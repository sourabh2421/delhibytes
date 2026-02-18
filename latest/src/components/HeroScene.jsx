import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Additional decorative blob for top-left edge coverage
const TopLeftBlob = ({ mouseOffset }) => {
  const mesh = useRef();
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime * 0.3;
    mesh.current.position.x = -0.55 + mouseOffset.x * -0.1 + Math.cos(t * 0.4) * 0.02;
    mesh.current.position.y = 0.55 + mouseOffset.y * 0.08 + Math.sin(t * 0.5) * 0.03;
    mesh.current.rotation.z = 0.3 + mouseOffset.x * -0.03 + Math.sin(t) * 0.02;
  });
  return (
    <mesh ref={mesh} position={[-0.55, 0.55, 0.15]} castShadow>
      <circleGeometry args={[0.32, 32]} />
      <meshStandardMaterial
        color="#fb923c"
        roughness={0.5}
        metalness={0}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Additional blob for upper edge coverage
const TopBlob = ({ mouseOffset }) => {
  const mesh = useRef();
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime * 0.25;
    mesh.current.position.x = 0.1 + mouseOffset.x * 0.05 + Math.sin(t * 0.3) * 0.02;
    mesh.current.position.y = 0.75 + mouseOffset.y * 0.08 + Math.cos(t * 0.4) * 0.03;
    mesh.current.scale.setScalar(1 + Math.sin(t * 0.4) * 0.04);
  });
  return (
    <mesh ref={mesh} position={[0.1, 0.75, 0.18]} castShadow>
      <circleGeometry args={[0.28, 32]} />
      <meshStandardMaterial
        color="#f59e0b"
        roughness={0.5}
        metalness={0}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// C-shaped / crescent blob (top-right) - yellow-orange, wraps around top-right edge
const CBlob = ({ mouseOffset }) => {
  const mesh = useRef();
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const R = 1.15; // Larger outer radius to overlap edge
    const r = 0.6;
    const start = Math.PI * 0.15;
    const end = Math.PI * 0.85;
    shape.absarc(0, 0, R, start, end, false);
    shape.lineTo(r * Math.cos(end), r * Math.sin(end));
    shape.absarc(0, 0, r, end, start, true);
    shape.closePath();
    const geom = new THREE.ExtrudeGeometry(shape, {
      depth: 0.14,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 3,
    });
    geom.rotateX(-Math.PI / 2);
    geom.computeBoundingBox();
    geom.center();
    return geom;
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime * 0.35;
    // Position to wrap around top-right edge of circular image
    mesh.current.position.x = 0.6 + mouseOffset.x * 0.12 + Math.sin(t * 0.5) * 0.02;
    mesh.current.position.y = 0.7 + mouseOffset.y * 0.1 + Math.cos(t * 0.4) * 0.03;
    mesh.current.rotation.z = -0.15 + mouseOffset.x * 0.04 + Math.sin(t) * 0.02;
  });

  return (
    <mesh ref={mesh} position={[0.6, 0.7, 0.2]} geometry={geometry} castShadow>
      <meshStandardMaterial
        color="#fbbf24"
        roughness={0.45}
        metalness={0.05}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Large teal/blob blob (lower-left) - overlaps left edge
const ElongatedBlobScaled = ({ mouseOffset }) => {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime * 0.4;
    // Position to overlap lower-left edge of circular image
    group.current.position.x = -0.7 + mouseOffset.x * -0.08 + Math.cos(t * 0.6) * 0.02;
    group.current.position.y = -0.4 + mouseOffset.y * 0.06 + Math.sin(t * 0.5) * 0.03;
    group.current.rotation.z = 0.4 + mouseOffset.y * 0.05 + Math.sin(t) * 0.02;
    group.current.rotation.y = mouseOffset.x * 0.04;
  });
  return (
    <group ref={group} position={[-0.7, -0.4, 0.25]} scale={[1.6, 1.1, 0.3]}>
      <mesh castShadow>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#14b8a6"
          roughness={0.5}
          metalness={0}
        />
      </mesh>
    </group>
  );
};

// Red circular blob (bottom-right) - overlaps lower-right edge
const SmallCircleBlob = ({ mouseOffset }) => {
  const mesh = useRef();
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime * 0.5;
    // Position to overlap lower-right edge of circular image
    mesh.current.position.x = 0.65 + mouseOffset.x * 0.15 + Math.sin(t) * 0.02;
    mesh.current.position.y = -0.6 + mouseOffset.y * 0.12 + Math.cos(t * 0.7) * 0.03;
    mesh.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.05);
  });
  return (
    <mesh ref={mesh} position={[0.65, -0.6, 0.2]} castShadow>
      <circleGeometry args={[0.4, 32]} />
      <meshStandardMaterial
        color="#ef4444"
        roughness={0.45}
        metalness={0.05}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Optional: soft glow behind central circle
const BackGlow = () => {
  const mesh = useRef();
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.03);
  });
  return (
    <mesh ref={mesh} position={[0, 0, -0.6]}>
      <circleGeometry args={[1.2, 64]} />
      <meshBasicMaterial
        color="#fed7aa"
        transparent
        opacity={0.25}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

function HeroScene({ mouse = { x: 0, y: 0 } }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 5, 4]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[512, 512]}
        shadow-camera-far={10}
        shadow-camera-left={-2}
        shadow-camera-right={2}
        shadow-camera-top={2}
        shadow-camera-bottom={-2}
        shadow-bias={-0.0002}
      />
      <directionalLight position={[-3, 4, 3]} intensity={0.6} />
      <pointLight position={[0, 0, 3]} intensity={0.7} color="#fff7ed" />

      {/* Objects positioned around edges to overlap the circular hero image */}
      <BackGlow />
      <CBlob mouseOffset={mouse} />
      <ElongatedBlobScaled mouseOffset={mouse} />
      <SmallCircleBlob mouseOffset={mouse} />
      <TopLeftBlob mouseOffset={mouse} />
      <TopBlob mouseOffset={mouse} />
    </>
  );
}

export default HeroScene;
