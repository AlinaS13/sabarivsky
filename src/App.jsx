import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header/header";

import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
import { CarFromUSA } from "./components/carFromUSA/CarFromUSA";
import { Gallery } from "./components/gallery/Gallery";
import { Advantages } from "./components/advantages/Advantages";
import { Certificates } from "./components/certificates/Certificates";
import { Partners } from "./components/partners/Partners";
import { Review } from "./components/review/Review";
import { Location } from "./components/location/Location";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter basename="/sabarivsky">
        <Header />
        <Hero />
        <About />
        <Services />
        <CarFromUSA />
        <Gallery />
        <Advantages />
        <Certificates />
        <Partners />
        <Review />
        <Location />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
