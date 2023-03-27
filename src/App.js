import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forside from "./pages/Forside";
import Prisliste from "./pages/Prisliste";
import Services from "./pages/Services";
import Om from "./pages/Om";
import Bookinger from "./pages/Bookinger";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AdminSide from "./pages/Admin/AdminSide";
import OpdateringsSide from "./pages/Admin/OpdateringsSide";
import OpretSide from "./pages/Admin/OpretSide";
import BookingSide from "./pages/Admin/BookingSide";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="/prisliste" element={<Prisliste />} />
          <Route path="/services" element={<Services />} />
          <Route path="/om" element={<Om />} />
          <Route path="/bookinger" element={<Bookinger />} />
          <Route path="/admin" element={<AdminSide />} />
          <Route path="/admin/posts/:postId" element={<OpdateringsSide />} />
          <Route path="/create" element={<OpretSide />} />
          <Route path="/bookingside" element={<BookingSide />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
