import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../img/13.jpg";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="New About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
// 1h50
