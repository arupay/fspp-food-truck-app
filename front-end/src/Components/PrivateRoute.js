import { getAuth } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const PrivateRoute = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return "Loading";
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
