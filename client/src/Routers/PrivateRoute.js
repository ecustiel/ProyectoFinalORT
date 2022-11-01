import { Navigate } from "react-router-dom";
import useAuth from "../Authentication/useAuth";

const PrivateRoute = ({ children }) => {
  //const user = false;
  //const user = true;

  const {user} = useAuth();

  if (!user) return <Navigate to="/login" />;
  return children;
};

export default PrivateRoute;