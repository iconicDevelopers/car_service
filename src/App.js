import "./App.css";
import AboutUs from "./Components/AboutUs";
import CarWrapper from "./Components/CarWrapper";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Service from "./Components/Service";

function App() {
  return (
    <>
      <NavBar />
      <Content />
      <Service />
      <CarWrapper />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
