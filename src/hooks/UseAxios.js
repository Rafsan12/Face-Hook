import { useEffect } from "react";
import { api } from "../api";
import { useAuth } from "./Useauth";

const useAxios = () => {
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    api.interceptors.request.use(
      (config) => {
        const authToken = auth?.authToken;
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }, []);
};
