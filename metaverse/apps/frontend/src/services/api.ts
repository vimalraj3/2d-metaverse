import axios from "axios";

const BACKEND_URL = "http://localhost:3000";

export interface SignupRequest {
  username: string;
  password: string;
  type: "admin" | "user";
}

export interface SigninRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  userId: string;
}

const api = {
  signup: async (data: SignupRequest): Promise<AuthResponse> => {
    const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, data);
    return response.data;
  },

  signin: async (data: SigninRequest): Promise<AuthResponse> => {
    const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, data);
    return response.data;
  },
};

export default api;
