import React, { Component } from "react";
import './Home.css'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //d-flex pb-3
  render() {
    console.log(this.props.data,'data')
    return (
      
  
          <div className="row">
           
          {this.props.data.map(val=>{
      return   <div className="col-md-6 col-xl-3 ">
      <div className="cardContent card mb-3" >
       <img src={val.links.mission_patch} className="card-img-top" alt="..." style={{"backgroundColor": "whitesmoke"}} />
       <div className="card-body">
      <p className="card-title">{val.mission_name} # {val.flight_number}</p>
         <p className="card-text">
         Mission Ids:  {val.mission_id}
         </p>
         Launch Year: <p>{val.launch_year}</p>
      Successful Launch <p>{val.launch_success}</p>
       </div>
     </div>
     </div>
   
          })}
       
 </div>

    );
  }
}
