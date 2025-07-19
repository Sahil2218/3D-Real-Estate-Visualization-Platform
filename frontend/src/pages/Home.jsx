import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { getAllProperties } from '../api/propertyApi';
import '../styles/Home.css';

const Home = () => {
  const [properties, setProperties] = useState([]);

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

  return (
    <div className="home-container">
      <h1>Property Listings</h1>
      <a href="/upload" className="upload-button">+ Add New Property</a>
      <div className="property-grid">
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        ) : (
          <p>No properties available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
