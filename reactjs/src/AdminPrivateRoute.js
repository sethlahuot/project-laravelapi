import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";

axios.interceptors.response.use(
  response => response,
  function axiosRetryInterceptor(err) {
    if (err.response && err.response.status === 401) {
      swal("Unauthorized", err.response.data.message, "warning");
      localStorage.removeItem("auth_token");
      window.location.href = "/"; 
    }
    return Promise.reject(err);
  }
);

function AdminPrivateRoute({ children }) {
  const [authenticated, setAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/checkingAuthenticated`)
      .then((res) => {
        if (res.status === 200) {
          setAuthenticated(true);
        }
      })
      .catch((err) => {
        setAuthenticated(false); 
      })
      .finally(() => {
        setLoading(false); 
      });

  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authenticated || !localStorage.getItem("auth_token")) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default AdminPrivateRoute;
