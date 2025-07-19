import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProperty } from '../api/propertyApi';
import '../styles/UploadProperty.css';

const UploadProperty = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    phone: '',
    address: '',
    price: '',
    type: 'rent',
    modelFilePath: '',
  });

  const [message, setMessage] = useState('');
  const [isUploaded, setIsUploaded] = useState(false); // success flag

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsUploaded(false);

    try {
      const updatedData = {
        ...formData,
        price: Number(formData.price),
        modelFilePath: `${formData.modelFilePath}`,
      };
      console.log("Sending to backend:", updatedData);
      await addProperty(updatedData);

      setMessage('✅ Property added successfully!');
      setIsUploaded(true); // show "Go to Home" button

      setFormData({
        name: '',
        description: '',
        phone: '',
        address: '',
        price: '',
        type: 'rent',
        modelFilePath: '',
      });
    } catch (error) {
      console.error("Error uploading property:", error);
      setMessage('❌ Error adding property.');
    }
  };

  return (
    <div className="form-container">
      <h2>Add a New Property</h2>
      <form onSubmit={handleSubmit} className="property-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />

        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="rent">Rent</option>
          <option value="lease">Lease</option>
        </select>

        <input
          type="text"
          name="modelFilePath"
          placeholder="Model filename (e.g., villa.glb)"
          value={formData.modelFilePath}
          onChange={handleChange}
          required
        />

        <button type="submit">Upload Property</button>
      </form>

      {message && <p className="message">{message}</p>}

      {isUploaded && (
        <button
          onClick={() => navigate('/')}
          className="go-home-button"
          style={{
            marginTop: '1rem',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Go to Home
        </button>
      )}
    </div>
  );
};

export default UploadProperty;
