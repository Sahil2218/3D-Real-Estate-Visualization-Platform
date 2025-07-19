import axios from 'axios';

const API_URL = 'http://localhost:5004/api/properties'; // base URL

// 🔹 Get all properties
export const getAllProperties = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw error;
  }
};

// 🔹 Add property (without file upload)
export const addProperty = async (propertyData) => {
  try {
    const response = await axios.post(`${API_URL}/add`, propertyData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error adding property:', error);
    throw error;
  }
};
