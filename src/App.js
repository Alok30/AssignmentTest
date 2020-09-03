import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "../src/Home";
import axios from "axios";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spaceData: [],
      land_success: "",
      launch_success: "",
      url: "",
      launch_year: "",
      arr: [
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
      ],
    };
  }
  async handleClick(val, data) {
    if ("launch_year" == data) {
      await this.setState(
        {
          launch_year: val,
        }
      );
    }
    if ("launch_success" == data) {
      await this.setState({
        launch_success: val,
      });
    }
    if ("land_success" == data) {
      await this.setState({
        land_success: val,
      });
    }
    this.callApi();
  }

  callApi() {
    axios
      .get(
        `https://api.spacexdata.com/v3/launches?limit=100&launch_year=${this.state.launch_year}&land_success=${this.state.land_success}&launch_success=${this.state.launch_success}`
      )
      .then((res) => {
        this.setState({ spaceData: res.data });
      });
  }
  componentDidMount() {
    axios
      .get("https://api.spacexdata.com/v3/launches?limit=100")
      .then((res) => {
       this.setState({
          spaceData: res.data,
        });
      });
  }


  render() {
   
    return (
      <div className="App" style={{"backgroundColor":"whitesmoke"}}>
           <h1>SpaceX Launch Programs</h1>
           <div className="container-fluid">
        <div className="row">
          
          <div className="col-md-6 col-sm-12 col-xl-3">
         
            <p>Launch year</p>
            <hr
              style={{
                display: "block",
                height: "1px",
                border: "0",
                borderTop: "1px solid #ccc",
                margin: " 1em 0",
                width: "130px",
                padding: "0",
                alignContent: "center",
              }}
            />
  
            <div className="yearButton">
              {this.state.arr.map((val) => {
                // here you return the new array created by map
                return (
                  <button
                    type="button"
                    class="btn btn-secondary "
                    style={{
                      marginRight: "20px",
                      marginTop: "20px",
                    }}
                    onClick={this.handleClick.bind(this, val, "launch_year")}
                  >
                    {val}
                  </button>
                );
              })}
            </div>
            <p> Successful Launch</p>
            <hr
              style={{
                display: "block",
                height: "1px",
                border: "0",
                borderTop: "1px solid #ccc",
                margin: " 1em 0",
                width: "130px",
                padding: "0",
                alignContent: "center",
              }}
            />
            <button
              type="button"
              class="btn btn-secondary"
              value={"here"}
              style={{
                marginRight: "20px",
                marginTop: "20px",
              }}
              onClick={this.handleClick.bind(this, "true", "launch_success")}
            >
              True
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              style={{
                marginRight: "20px",
                marginTop: "20px",
              }}
              onClick={this.handleClick.bind(this, "false", "launch_success")}
            >
              False
            </button>

            <p> Successful Landing</p>
            <hr
              style={{
                display: "block",
                height: "1px",
                border: "0",
                borderTop: "1px solid #ccc",
                margin: " 1em 0",
                width: "130px",
                padding: "0",
                alignContent: "center",
              }}
            />
            <button
              type="button"
              style={{
                marginRight: "20px",
                marginTop: "20px",
              }}
              class="btn btn-secondary"
              onClick={this.handleClick.bind(this, "true", "land_success")}
            >
              True
            </button>
            <button
              type="button"
              style={{
                marginRight: "20px",
                marginTop: "20px",
              }}
              class="btn btn-secondary"
              onClick={this.handleClick.bind(this, "false", "land_success")}
            >
              False
            </button>
          </div>

          <div className="col-md-6 col-sm-12 col-xl-8">
            {this.state.spaceData.length > 0 && (
              <Home data={this.state.spaceData} />
            )}
          </div>
        </div>
      </div>
      </div>
    );
  }
}
