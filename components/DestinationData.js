import { Component } from "react";

import Moutain1 from "../img/3.jpg"
import Moutain2 from "../img/5.jpg"
import Moutain3 from "../img/6.jpg"
import Moutain4 from "../img/7.jpg"
import "./DestinationStyles.css";
class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="des-text">
              <h2>{this.props.heading}</h2>
              <p>
               {this.props.text}
              </p>
            </div>
            <div className="image">
                <img alt="img" src={this.props.img1}/>
                <img alt="img" src={this.props.img2}/>
              
            </div>
          </div>
        )
    }
}
export default DestinationData;
//2h18