import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://get.pxhere.com/photo/landscape-car-vehicle-automobile-make-off-roading-8677.jpg"
        title="Your Journey Your STory"
        text="Choose your favourite destination."
        buttonText="Travel plan"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}
export default Home;
