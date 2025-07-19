import React, { useState } from 'react';
import { addProperty } from '../api/propertyApi';
import '../styles/UploadProperty.css';

const UploadProperty = () => {
  const [formData, setFormData] = useState({
    name: '', description: '', phone: '', address: '', price: '', type: 'rent'
  });
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      await addProperty(formData, file);
      setMessage('Property added successfully!');
      setFormData({ name: '', description: '', phone: '', address: '', price: '', type: 'rent' });
      setFile(null);
    } catch (error) {
      setMessage('Error adding property.');
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
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Upload Property</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default UploadProperty;
