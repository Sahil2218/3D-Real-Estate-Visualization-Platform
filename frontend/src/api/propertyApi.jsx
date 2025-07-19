import axios from 'axios';

const API_URL = 'http://localhost:5004/api/properties'; // Adjust based on backend port

// Fetch all properties
export const getAllProperties = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};

// Add a new property
export const addProperty = async (propertyData, file) => {
  const data = new FormData();
  for (const key in propertyData) {
    data.append(key, propertyData[key]);
  }
  data.append('modelFile', file);

  try {
    const response = await axios.post(`${API_URL}/add`, data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  } catch (error) {
    console.error('Error adding property:', error);
    throw error;
  }
};
