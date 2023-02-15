import React from "react";
import PortfolioImage from "../../assets/img/Me.JPG";

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
              My name is Zhongcheng Zhao, and I can go by Zack. And I'm a full-stack software engineer. I have my Bachelor's Degrees in Finance from University of Kansas. Also I always have passion for computer science, especiaaly coding. I had been working several projects in KU bootcamp likes Note taker, weather dashboard and work day schedule. 
              <br></br>
              <br></br>While I am in the bootcamp, I had learned how to use different skills for solving problem. 
            </h6>
            </div>
      </div>
    </div>
  );
}

export default About;