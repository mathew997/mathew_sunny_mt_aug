import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Header from "./layouts/Header";
import "./App.css";
import Faq from "./components/Faq";
import Video from "./components/Video";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-brand">
      <Header />
      <Banner />
      <Contact />
      <Portfolio />
      <Faq />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
