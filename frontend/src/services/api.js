import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getQuestion = async (difficulty) => {
  try {
    const response = await axios.get(`${API_URL}/questions`, {
      params: { difficulty }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching question:', error);
    throw error;
  }
};

export const saveTestResult = async (resultData) => {
  try {
    const response = await axios.post(`${API_URL}/results`, resultData);
    return response.data;
  } catch (error) {
    console.error('Error saving test result:', error);
    throw error;
  }
};