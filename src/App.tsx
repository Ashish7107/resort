import "./App.css";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Rooms from "./components/Rooms";
import Services from "./components/Services";

import Wtf from "./components/Wtf";

function App() {
  return (
    <>
      <div className=" row">
        <nav>
          <Navbar></Navbar>
        </nav>
        <Wtf />
        <Intro />
        <Rooms />
        <Services />

        <Gallery />

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
