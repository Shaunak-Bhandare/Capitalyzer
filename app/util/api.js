import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000", // Assuming Flask runs on port 5000 locally
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchData = async () => {
  try {
    const response = await apiClient.get("/api/data");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
