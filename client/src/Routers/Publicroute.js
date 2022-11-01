import { Navigate } from "react-router-dom";
import useAuth from "../Authentication/useAuth";

const PublicRoute = ({ children }) => {
  //const user = false;
  //const user = true;

  const {user} = useAuth();

  if (user) return <Navigate to="/search" />;
  return children;
};

export default PublicRoute;