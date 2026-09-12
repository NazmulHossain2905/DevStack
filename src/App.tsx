import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Technologies />
      <Footer />

      {/* For React Toastify */}
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
