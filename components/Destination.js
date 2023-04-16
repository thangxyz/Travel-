import Moutain1 from "../img/3.jpg";
import Moutain2 from "../img/5.jpg";
import Moutain3 from "../img/6.jpg";
import Moutain4 from "../img/7.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the happy</p>
      <DestinationData
        className="first-des"
        heading="TRAVEL DANANG CITY"
        text=" Da Nang is very famous for Ba Na Hill tourist area on the top of the
      mountain. The center of this city has many bridges, the most famous
      of which is the Han River Bridge. This is the first bridge in
      Vietnam that can be rotated. The bridges are also the pride of the
      local people. In addition, Danang also has many beautiful caves and
      beaches. This livable city also has many delicious dishes that
      visitors must praise and remember."
        img1={Moutain1}
        img2={Moutain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="TRAVEL HOIAN CITY"
        text=" Hoi An is a city in Quang Nam province with many old quarters built in the 16th century and still exists almost intact to this day. Hoi An is famous for its traditional, harmonious architectural beauty of houses, walls and roads with ancient beauty."
        img1={Moutain3}
        img2={Moutain4}
      />
    </div>
  );
};
export default Destination;
