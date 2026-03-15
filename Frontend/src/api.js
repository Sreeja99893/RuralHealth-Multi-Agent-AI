import axios from "axios";

export const sendMessage = async (symptoms, location) => {
  const response = await axios.post("http://localhost:5000/agent", {
    symptoms,
    location
  });

  return response.data;
};