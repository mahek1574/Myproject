import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_URL = `${BASE_URL}/api/auth`;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const admin = user && user.role === "admin" ? user : null;

  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(`${API_URL}/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);


  const login = async (usernameOrEmail, password) => {
    try {
      const body = usernameOrEmail.includes("@")
        ? { email: usernameOrEmail, password }
        : { username: usernameOrEmail, password };

      let res;
      try {
        res = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
          credentials: "include",
        });
      } catch (networkError) {
        throw new Error("Unable to connect to the server. Please check if the backend server is running.");
      }

      let data;
      try {
        data = await res.json();
      } catch (jsonError) {
        throw new Error(`Server returned an invalid response (${res.status}): ${res.statusText || 'Internal Server Error'}`);
      }

      if (!res.ok) {
        throw new Error(data.message || "Failed to log in");
      }

      setUser(data);
      return { success: true, user: data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  
  const signup = async (name, email, password) => {
    try {
      let res;
      try {
        res = await fetch(`${API_URL}/user/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
          credentials: "include",
        });
      } catch (networkError) {
        throw new Error("Unable to connect to the server. Please check if the backend server is running.");
      }

      let data;
      try {
        data = await res.json();
      } catch (jsonError) {
        throw new Error(`Server returned an invalid response (${res.status}): ${res.statusText || 'Internal Server Error'}`);
      }

      if (!res.ok) {
        throw new Error(data.message || "Failed to sign up");
      }

      setUser(data);
      return { success: true, user: data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };


  const adminSignup = async (username, password) => {
    try {
      let res;
      try {
        res = await fetch(`${API_URL}/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
          credentials: "include",
        });
      } catch (networkError) {
        throw new Error("Unable to connect to the server. Please check if the backend server is running.");
      }

      let data;
      try {
        data = await res.json();
      } catch (jsonError) {
        throw new Error(`Server returned an invalid response (${res.status}): ${res.statusText || 'Internal Server Error'}`);
      }

      if (!res.ok) {
        throw new Error(data.message || "Failed to register admin");
      }

      setUser(data);
      return { success: true, user: data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  
  const logout = async () => {
    try {
      const res = await fetch(`${API_URL}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.ok) {
        setUser(null);
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, admin, loading, login, signup, adminSignup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
