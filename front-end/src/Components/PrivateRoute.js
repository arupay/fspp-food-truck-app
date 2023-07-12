import { getAuth } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PrivateRoute = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    toast.info("You must log in to use this functionality", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
