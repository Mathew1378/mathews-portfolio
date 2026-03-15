import { useRef, useMemo, Component } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Error boundary to prevent Three.js crashes from breaking the whole app
class ThreeErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.warn('Three.js error caught:', error, info);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const ParticleField = () => {
  const mesh = useRef();
  const count = 1500;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const purple = new THREE.Color('#a855f7');
    const blue = new THREE.Color('#3b82f6');
    const cyan = new THREE.Color('#06b6d4');
    const colorPalette = [purple, blue, cyan];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 30;
      pos[i3 + 1] = (Math.random() - 0.5) * 30;
      pos[i3 + 2] = (Math.random() - 0.5) * 30;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }

    return [pos, col];
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const FloatingShape = ({ position, color, speed }) => {
  const mesh = useRef();

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
      mesh.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <octahedronGeometry args={[0.3, 0]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  );
};

const ParticleBackground = () => {
  return (
    <ThreeErrorBoundary>
      <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          gl={{ antialias: false, alpha: true, powerPreference: 'low-power', failIfMajorPerformanceCaveat: false }}
          style={{ background: 'transparent' }}
          dpr={[1, 1.5]}
          fallback={null}
        >
          <ambientLight intensity={0.5} />
          <ParticleField />
          <FloatingShape position={[-4, 2, -3]} color="#a855f7" speed={0.4} />
          <FloatingShape position={[4, -2, -5]} color="#3b82f6" speed={0.3} />
          <FloatingShape position={[0, 3, -4]} color="#06b6d4" speed={0.5} />
          <FloatingShape position={[-3, -3, -6]} color="#ec4899" speed={0.35} />
        </Canvas>
      </div>
    </ThreeErrorBoundary>
  );
};

export default ParticleBackground;
