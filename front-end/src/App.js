import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./Components/NavBar";
import Maps from "./Components/Maps";

//Pages
import EditPage from "./Pages/EditPage";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import IndexPage from "./Pages/IndexPage";
import ShowPage from "./Pages/ShowPage";
import NewPage from "./Pages/NewPage";
import About from "./Pages/About";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trucks" element={<IndexPage />} />
          <Route path="/trucks/:id" element={<ShowPage />} />
          <Route path="/trucks/new" element={<NewPage />} />
          <Route path="/trucks/:id/edit/" element={<EditPage />} />
          {/* <Route path="/map" element={<Maps />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
