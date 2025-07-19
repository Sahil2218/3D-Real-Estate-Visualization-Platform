import React, { useEffect, useState, useRef } from 'react';
import { getAllProperties } from '../api/propertyApi';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from '../components/Model';
import '../styles/ModelsPreview.css';

const ModelsPreview = () => {
  const [properties, setProperties] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const lightRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProperties();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchData();
  }, []);

  const nextModel = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevModel = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  const currentProperty = properties[currentIndex];

  return (
    <div style={{ width: "100vw", height: "100vh", background: "linear-gradient(to bottom, black, grey)", color: "white" }}>
      <h1 style={{ textAlign: "center", paddingTop: "20px" }}>3D Property Carousel</h1>

      {properties.length > 0 && (
        <>
          {/* Left Arrow */}
          <button onClick={prevModel} style={arrowButtonStyle("left")}>&#9664;</button>

          {/* 3D Model Canvas */}
          <div style={{ height: "65vh" }}>
            <Canvas key={currentProperty?.modelFilePath} camera={{ position: [0, 5, 10], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight ref={lightRef} position={[5, 5, 5]} intensity={1} />
              <OrbitControls />
              {currentProperty && (
                <Model
                  glbPath={`/models/${currentProperty.modelFilePath}`}
                  meshSettings={{ scale: 1, rotationX: 0, rotationY: 0, rotationZ: 0 }}
                  materialSettings={{ color: "#ffffff", roughness: 0.5, metalness: 0.5 }}
                />
              )}
            </Canvas>
          </div>

          {/* Right Arrow */}
          <button onClick={nextModel} style={arrowButtonStyle("right")}>&#9654;</button>

          {/* Property Info */}
          {currentProperty && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h2>{currentProperty.name}</h2>
              <p>{currentProperty.description}</p>
              <p><strong>Price:</strong> ${currentProperty.price}</p>
              <p><strong>Type:</strong> {currentProperty.type}</p>
              <p><strong>Phone:</strong> {currentProperty.phone}</p>
              <a
                href={`/viewer?model=${currentProperty.modelFilePath}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: '15px',
                  display: 'inline-block',
                  padding: '10px 16px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold'
                }}
              >
                View 3D Demo
              </a>
            </div>
          )}
        </>
      )}

      {/* Loading or No Data */}
      {properties.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>Loading properties...</p>
      )}
    </div>
  );
};

const arrowButtonStyle = (side) => ({
  position: "absolute",
  [side]: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "2rem",
  background: "rgba(0,0,0,0.5)",
  color: "white",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
  zIndex: 10
});

export default ModelsPreview;
