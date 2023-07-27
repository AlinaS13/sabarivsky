import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header/header";

import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
import { Gallery } from "./components/gallery/Gallery";
import { Advantages } from "./components/advantages/Advantages";
import { Certificates } from "./components/certificates/Certificates";
import { Partners } from "./components/Partners/Partners";
import { Review } from "./components/review/Review";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Advantages />
        <Certificates />
        <Partners />
        <Review />
      </BrowserRouter>
    </>
  );
}

export default App;
