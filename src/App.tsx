import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />

      {/* For React Toastify */}
      <ToastContainer />
    </>
  );
};

export default App;
