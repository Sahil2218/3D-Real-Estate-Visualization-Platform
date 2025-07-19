import { useGLTF } from "@react-three/drei";

function Model({ glbPath, meshSettings, materialSettings }) {
    const { scene } = useGLTF(glbPath);

    scene.traverse((child) => {
        if (child.isMesh) {
            child.scale.set(meshSettings.scale, meshSettings.scale, meshSettings.scale);
            child.rotation.set(meshSettings.rotationX, meshSettings.rotationY, meshSettings.rotationZ);
            child.material.color.set(materialSettings.color);
            child.material.roughness = materialSettings.roughness;
            child.material.metalness = materialSettings.metalness;
        }
    });

    return <primitive object={scene} />;
}

export default Model;
