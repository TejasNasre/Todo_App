import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store/index.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(sessionStorage.getItem("id"));
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
