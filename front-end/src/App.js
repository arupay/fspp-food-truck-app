import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { AuthProvider } from "./context/AuthContext";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//Components
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";

//Pages
import EditPage from "./Pages/EditPage";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import IndexPage from "./Pages/IndexPage";
import ShowPage from "./Pages/ShowPage";
import NewPage from "./Pages/NewPage";
import About from "./Pages/About";
import RenderMapFn from "./Components/RenderMapFn";
import LoginPage from "./Pages/LoginPage";
import ScrollToTop from "./Components/ScrollToTop";

const API = process.env.REACT_APP_API_URL;

function App() {
  const [loggedUser, setLoggedUser] = useState({});
  const [trucksCoords, setTrucksCoords] = useState([]);
  const auth = getAuth();
  useEffect(() => {
    const userSession = onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        axios
          .get(`${API}/users/${email}/`)
          .then((res) => {
            setLoggedUser(res.data[0]);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        setLoggedUser({});
      }
    });
    axios
      .get(`${API}/trucks`)
      .then((res) => {
        const coords = res.data.payload
          .filter((e) => e.lat !== null)
          .map((e) => {
            return [
              { name: e.name, image_url: e.image_url, id: e.id },
              { lat: Number(e.lat), lng: Number(e.lng) },
            ];
          });
        setTrucksCoords(coords);
      })
      .catch((err) => {
        return err;
      });
    return () => userSession();
  }, [auth]);

  return (
    <div className="app">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <ScrollToTop />
        <AuthProvider>
          <NavBar loggedUser={loggedUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trucks" element={<IndexPage />} />
            <Route
              path="/trucks/:id"
              element={<ShowPage loggedUser={loggedUser} />}
            />
            <Route element={<PrivateRoute />}>
              <Route
                path="/trucks/new"
                element={<NewPage loggedUser={loggedUser} />}
              />
            </Route>
            <Route path="/trucks/:id/edit/" element={<EditPage />} />
            <Route
              path="/map"
              element={<RenderMapFn trucksCoords={trucksCoords} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
