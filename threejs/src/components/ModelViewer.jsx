import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import Model from "./Model"; 
import { GUI } from "lil-gui";

export default function ModelViewer({ glbPath }) {
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 5, z: 10 });
  const [lightSettings, setLightSettings] = useState({ intensity: 1, x: 5, y: 5, z: 5 });
  const [meshSettings, setMeshSettings] = useState({ scale: 1, rotationX: 0, rotationY: 0, rotationZ: 0 });
  const [materialSettings, setMaterialSettings] = useState({ color: "#ffffff", roughness: 0.5, metalness: 0.5 });

  const lightRef = useRef();
  const guiRef = useRef(null);

  useEffect(() => {
    const gui = new GUI();
    guiRef.current = gui;

    const cameraFolder = gui.addFolder("Camera Controls");
    cameraFolder.add(cameraPosition, "x", -20, 20).onChange(() => setCameraPosition({ ...cameraPosition }));
    cameraFolder.add(cameraPosition, "y", -10, 20).onChange(() => setCameraPosition({ ...cameraPosition }));
    cameraFolder.add(cameraPosition, "z", -20, 20).onChange(() => setCameraPosition({ ...cameraPosition }));

    const lightFolder = gui.addFolder("Lighting Controls");
    lightFolder.add(lightSettings, "intensity", 0, 5).onChange(() => setLightSettings({ ...lightSettings }));
    lightFolder.add(lightSettings, "x", -10, 10).onChange(() => setLightSettings({ ...lightSettings }));
    lightFolder.add(lightSettings, "y", -10, 10).onChange(() => setLightSettings({ ...lightSettings }));
    lightFolder.add(lightSettings, "z", -10, 10).onChange(() => setLightSettings({ ...lightSettings }));

    const meshFolder = gui.addFolder("Mesh Controls");
    meshFolder.add(meshSettings, "scale", 0.1, 5).onChange(() => setMeshSettings({ ...meshSettings }));
    meshFolder.add(meshSettings, "rotationX", 0, Math.PI * 2).onChange(() => setMeshSettings({ ...meshSettings }));
    meshFolder.add(meshSettings, "rotationY", 0, Math.PI * 2).onChange(() => setMeshSettings({ ...meshSettings }));
    meshFolder.add(meshSettings, "rotationZ", 0, Math.PI * 2).onChange(() => setMeshSettings({ ...meshSettings }));

    const materialFolder = gui.addFolder("Material Controls");
    materialFolder.addColor(materialSettings, "color").onChange(() => setMaterialSettings({ ...materialSettings }));
    materialFolder.add(materialSettings, "roughness", 0, 1).onChange(() => setMaterialSettings({ ...materialSettings }));
    materialFolder.add(materialSettings, "metalness", 0, 1).onChange(() => setMaterialSettings({ ...materialSettings }));

    cameraFolder.open();
    lightFolder.open();
    meshFolder.open();
    materialFolder.open();

    return () => gui.destroy();
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "linear-gradient(to bottom, black, grey)" }}>
      <Canvas camera={{ position: [cameraPosition.x, cameraPosition.y, cameraPosition.z], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          ref={lightRef}
          position={[lightSettings.x, lightSettings.y, lightSettings.z]}
          intensity={lightSettings.intensity}
        />
        <Model
          glbPath={glbPath}
          meshSettings={meshSettings}
          materialSettings={materialSettings}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
