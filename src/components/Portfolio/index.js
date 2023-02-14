import React from "react";
import Projects from "../../components/Project";
import workdayscheduler from "../../assets/img/Work Day Scheduler.png";
import weatherdashboard from "../../assets/img/Weather Dashboardpng.png";
import regex from "../../assets/img/regex.png"
import notetaker from "../../assets/img/Note Taker.png"

const Portfolio = (singleProject) => {

    const projectList = [
      {
        title: "Work Day Scheduler",
        summary: "This application is a daily planner that can help with users's time managemnt. User can save events for each hour of the day (9AM-5PM).",
        image: workdayscheduler,
        technologies: "HTML, CSS, JavaScript, Bootstrap, jQuery, Moment.js",
        deployedLink: "https://zhngzh527.github.io/Work-Day-Scheduler/",
        github: "https://github.com/zhngzh527/Work-Day-Scheduler",
      },
      {
        title: "Weather Dashboad",
        summary: "This application is a weather forecast dashboard that can help with users to see the weather outlook for multiple cities. So that they can plan a trip accordingly.",
        image: weatherdashboard,
        technologies: "JavaScript, HTML&CSS, BootStrap, OpenWeather API",
        deployedLink: "https://zhngzh527.github.io/Weather-Dashboard/",
        github: "https://github.com/zhngzh527/Weather-Dashboard",
      },
      {
        title: "Regex Tutorial",
        summary: "This is a tutorial that explains how a specific regular expression, or regex, functions by breaking down each part of the expression and describing what it does.",
        image: regex,
        technologies: "gists",
        deployedLink: "https://github.com/zhngzh527/Computer-Science-for-JavaScript-Challenge-Regex-Tutorial",
        github: "https://github.com/zhngzh527/Computer-Science-for-JavaScript-Challenge-Regex-Tutorial",
      },
      {
        title: "Note Taker",
        summary: "This note taker application can be used to write and save notes.This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
        image: notetaker,
        technologies: "JavaScript, Express.js",
        deployedLink: "https://github.com/zhngzh527/Note-Taker",
        github: "https://github.com/zhngzh527/Note-Taker",
      },

  ];
  
    return (
      <div key={singleProject.title}>
        <div className="flex-row">
            {projectList.map((singleProject) => (
              <Projects singleProject={singleProject}/>
          ))}
        </div>
      </div>
    );
  };
  
  export default Portfolio;