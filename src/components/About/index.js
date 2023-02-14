import React from "react";
import PortfolioImage from "../../assets/img/";

function About() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              src={PortfolioImage}
              className="my-2"
              style={{ width: "60%" }}
              alt="cover"
            ></img>
          </div>
          <div className="col-6">
            <h1 id="about">About me</h1>
            <h6 style={{ width: "80%", justifyContent: "center" }} id="about">
              TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
              <br></br>
              <br></br>TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
              TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest
              TestTestTestTestTestTestTestTestTestTestTestTest
            </h6>
            </div>
      </div>
    </div>
  );
}

export default About;