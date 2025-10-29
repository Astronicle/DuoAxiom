import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL;

export async function registerUser(data) {
  try {
    const res = await axios.post(`${API_BASE}/api/users`, data, {
      withCredentials: true, // for cookies or tokens
    });
    return res.data;
  } catch (err) {
    console.error("Registration failed:", err);
    throw err;
  }
}
