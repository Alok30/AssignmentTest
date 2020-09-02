import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
   
    return (
      
  
          <div className="row">
          {this.props.data.map(val=>{
      return   <div className="col-md-6 col-xl-3">
      <div className="card" style={{ width: "12rem",    'marginTop': '10px' }}>
       <img src={val.links.mission_patch} className="card-img-top" alt="..." />
       <div className="card-body">
      <h5 className="card-title">{val.mission_name} # {val.flight_number}</h5>
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
