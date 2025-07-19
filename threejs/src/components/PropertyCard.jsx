import React from 'react';
import '../styles/PropertyCard.css';

const PropertyCard = ({ property }) => {
  if (!property) return <p>Error loading property data.</p>;

  return (
    
    <div className="property-card">
      <h2>{property.name}</h2>
      <p>{property.description}</p>
      <p><strong>Price:</strong> ${property.price}</p>
      <p><strong>Type:</strong> {property.type}</p>
      <p><strong>Phone:</strong> {property.phone}</p>
      <a href={`http://localhost:5004/${property.modelFilePath}`} target="_blank" rel="noopener noreferrer">
        Download 3D Model
      </a>
      <br />
      <a
        href={`/viewer?model=${property.modelFilePath}`}
        target="_blank"
        rel="noopener noreferrer"
        className="view-3d-button"
      >
        View 3D Model
      </a>
    </div>
  );
};

export default PropertyCard;
