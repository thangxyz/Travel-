import TripData from "./TripData";
import Trip1 from "../img/6.jpg";
import Trip2 from "../img/9.jpg";
import Trip3 from "../img/10.jpg";
import "./Trip.css";
function Trip() {
  return (
   
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destination using Google Maps.</p>
    
        <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in HANOI"
          text="Hanoi people are friendly, elegant and very hospitable. Coming to Hanoi, you should try the famous dishes here such as “Phở”, Hanoi Kebab rice noodles, noodle with fried tofu & shrimp paste,… Looking at Hanoi, we feel a city that is both modern and ancient."
        />
        <TripData
          image={Trip2}
          heading="Trip in VINH HA LONG"
          text="Hanoi people are friendly, elegant and very hospitable. Coming to Hanoi, you should try the famous dishes here such as “Phở”, Hanoi Kebab rice noodles, noodle with fried tofu & shrimp paste,… Looking at Hanoi, we feel a city that is both modern and ancient."
        />
        <TripData
          image={Trip3}
          heading="Trip in TP HCM"
          text="Hanoi people are friendly, elegant and very hospitable. Coming to Hanoi, you should try the famous dishes here such as “Phở”, Hanoi Kebab rice noodles, noodle with fried tofu & shrimp paste,… Looking at Hanoi, we feel a city that is both modern and ancient."
        />
        </div>
    </div>
   
  );
}
export default Trip;
