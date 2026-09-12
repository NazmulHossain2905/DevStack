import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Technologies />

      {/* For React Toastify */}
      <ToastContainer />
    </>
  );
};

export default App;
