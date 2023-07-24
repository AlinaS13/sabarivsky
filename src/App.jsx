import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header/header";

import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
import { Gallery } from "./components/gallery/Gallery";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <About />
        <Services />
        <Gallery />
      </BrowserRouter>
    </>
  );
}

export default App;
