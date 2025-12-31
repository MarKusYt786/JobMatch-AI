import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const analyzeResume = (formData) =>
  API.post("/resume/analyze", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  export const getResume = (resumeId) => API.get(`/resume/${resumeId}`);