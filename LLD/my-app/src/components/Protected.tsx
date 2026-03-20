import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const isAuthenticated = false;

  return (
    <div>
      {isAuthenticated ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
};

export default Protected;
