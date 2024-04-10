import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className=" min-h-screen flex justify-center items-start">
        <span className="loading mt-24 loading-ring loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoute;