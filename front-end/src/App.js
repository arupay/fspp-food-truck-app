import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

//Components
import NavBar from "./Components/NavBar";
import Maps from "./Components/RenderMapFn";
import Footer from "./Components/Footer";

//Pages
import EditPage from "./Pages/EditPage";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import IndexPage from "./Pages/IndexPage";
import ShowPage from "./Pages/ShowPage";
import NewPage from "./Pages/NewPage";
import About from "./Pages/About";
import RenderMapFn from "./Components/RenderMapFn";

const API = process.env.REACT_APP_API_URL;

function App() {
  const [trucksCoords, setTrucksCoords] = useState([]);
  useEffect(() => {
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
  }, []);
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
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trucks" element={<IndexPage />} />
          <Route path="/trucks/:id" element={<ShowPage />} />
          <Route path="/trucks/new" element={<NewPage />} />
          <Route path="/trucks/:id/edit/" element={<EditPage />} />
          <Route
            path="/map"
            element={<RenderMapFn trucksCoords={trucksCoords} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
