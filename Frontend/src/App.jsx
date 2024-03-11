import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
