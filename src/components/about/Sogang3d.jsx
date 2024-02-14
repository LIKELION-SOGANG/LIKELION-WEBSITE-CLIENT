/* eslint-disable react/no-unknown-property*/
import { Environment, useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
function Sogang3d() {
  const model = useGLTF('./3d/logo3d.gltf');
  const ref = useRef();

  return (
    <Suspense fallback={null}>
      <OrbitControls />
      <pointLight position={[10, 0, 10]} />
      <Environment preset="sunset" />
      <primitive object={model.scene} scale={1} />
    </Suspense>
  );
}

export default Sogang3d;
