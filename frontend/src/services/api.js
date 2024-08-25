import axiosInstance from './axiosInstance';

// Function to submit the form data
// Function to submit the form data
export const submitFormData = async (formData) => {
  try {
    const response = await axiosInstance.post('/submit', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting form data:', error);
    throw error;
  }
};
