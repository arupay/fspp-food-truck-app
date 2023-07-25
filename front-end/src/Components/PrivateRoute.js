import { getAuth } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRouteWrapper = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading && !user) {
      toast.info("You must log in to use this functionality", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate("/login"); // Redirect to the login page
    }
  }, [loading, user, navigate]);

  if (loading) {
    return <div>Loading...</div>; // You can use a loading spinner or any other placeholder
  }

  // If the user is logged in, render the nested routes
  return <>{children}</>;
};

const PrivateRoute = () => {
  return (
    <PrivateRouteWrapper>
      <Outlet />
    </PrivateRouteWrapper>
  );
};

export default PrivateRoute;
