import About from "./auxiliarComponents/About";
import Contact from "./auxiliarComponents/Contact";
import Footer from "./auxiliarComponents/Footer";
import { Header } from "./auxiliarComponents/Header";
import { Hero } from "./auxiliarComponents/Hero";
import PreITV from "./auxiliarComponents/PreITV";
import Services from "./auxiliarComponents/Services";
import Testimonials from "./auxiliarComponents/Testimonials";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <PreITV />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
