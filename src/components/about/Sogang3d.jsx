/* eslint-disable react/no-unknown-property*/
import { Environment, useGLTF, OrbitControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { Suspense, useEffect, useRef } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

function Sogang3d() {
  const model = useGLTF('/3d/logo3d.gltf');
  const ref = useRef();
  const { camera } = useThree(); // useThree 훅을 사용하여 카메라 정보를 가져옵니다.
  // 카메라의 초기 위치와 시선을 설정합니다.
  camera.position.set(100, 0, 100); // 카메라의 위치를 (0, 0, 10)으로 설정합니다.
  camera.lookAt(0, 10, 0); // 카메라가 (0, 0, 0)을 바라보도록 시선을 설정합니다.
  const initialRotationY = 1; // 예를 들어, 0.5 라디안으로 설정
  const isMobileScreen = useMediaQuery('(max-width: 768px)');

  useFrame(({ clock }) => {
    // ref.current가 정의되어 있을 때만 회전을 적용합니다.
    if (ref.current) {
      // clock.elapsedTime은 경과한 시간을 초 단위로 제공합니다.
      // 여기서는 오브젝트를 y축 주위로 회전시킵니다.
      ref.current.rotation.y = initialRotationY + clock.elapsedTime; // 초기 회전각에 경과 시간을 더합니다.
    }
  });

  return (
    <Suspense fallback={null}>
      <pointLight position={[10, 0, 10]} />
      <Environment preset="sunset" />
      <group position={[0, 0, 0]}>
        <primitive
          object={model.scene}
          ref={ref}
          scale={isMobileScreen ? 10 : 14}
        />
      </group>
    </Suspense>
  );
}

export default Sogang3d;
