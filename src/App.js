import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Skillcard from "./Components/Skillcard/Skillcard";
import Headroom from "react-headroom";

function App() {
  return (
    <div>
      <Headroom>
        <Navbar />
      </Headroom>
      <Header />
      <Services />
      <Skillcard />
      <Footer />
    </div>
  );
}

export default App;
