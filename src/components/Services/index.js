import React from "react";
import { Link } from "react-router-dom";
import { FaGithubSquare, FaProjectDiagram } from "react-icons/fa";
import Icon1 from "../../images/project1.JPG";
import Icon2 from "../../images/weatherapi.JPG";
import Icon3 from "../../images/dayplanner.JPG";
import Icon4 from "../../images/project2.JPG";
import Icon5 from "../../images/teamgen.JPG";
import Icon6 from "../../images/userdirectory.JPG";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="Services">
      <ServicesH1>My Portfolio</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH2>Sports App Project</ServicesH2>
          {<ServicesIcon src={Icon1} />}
          <ServicesP>
            Deploy App:{" "}
            <a
              href="https://jeck24.github.io/Project1/"
              target="_blank"
              aria-label="github"
            >
              <FaGithubSquare />
            </a>{" "}
            RepoLink:{" "}
            <a
              href="https://github.com/jeck24/Project1/tree/JC"
              target="_blank"
              aria-label="github"
            >
              <FaProjectDiagram />
            </a>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Weather App</ServicesH2>
          <ServicesIcon src={Icon2} />
          <ServicesP>
            Deploy App:{" "}
            <a
              href="https://sanjothebay.github.io/weather_app/"
              target="_blank"
              aria-label="github"
            >
              <FaGithubSquare />
            </a>{" "}
            RepoLink:{" "}
            <a
              href="https://github.com/sanjothebay/weather_app"
              target="_blank"
              aria-label="github"
            >
              <FaProjectDiagram />
            </a>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Day Planner</ServicesH2>
          <ServicesIcon src={Icon3} />
          <ServicesP>
            Deploy App:{" "}
            <a
              href="https://sanjothebay.github.io/schedule_app/"
              target="_blank"
              aria-label="github"
            >
              <FaGithubSquare />
            </a>{" "}
            RepoLink:{" "}
            <a
              href="https://github.com/sanjothebay/schedule_app"
              target="_blank"
              aria-label="github"
            >
              <FaProjectDiagram />
            </a>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2> Chore Project app</ServicesH2>
          <ServicesIcon src={Icon4} />
          <ServicesP>
            Deploy App:{" "}
            <a
              href="https://protected-island-07471.herokuapp.com/"
              target="_blank"
              aria-label="github"
            >
              <FaGithubSquare />
            </a>{" "}
            RepoLink:{" "}
            <a
              href="https://github.com/pegasus-1982/Project2-Chores/tree/JC"
              target="_blank"
              aria-label="github"
            >
              <FaProjectDiagram />
            </a>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Team Profile Genarator</ServicesH2>
          <ServicesIcon src={Icon5} />
          <ServicesP>
            Deploy App:{" "}
            <a
              href="https://sanjothebay.github.io/Team_Profile_Generator/"
              target="_blank"
              aria-label="github"
            >
              <FaGithubSquare />
            </a>{" "}
            RepoLink:{" "}
            <a
              href="https://github.com/sanjothebay/Team_Profile_Generator"
              target="_blank"
              aria-label="github"
            >
              <FaProjectDiagram />
            </a>
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>User Directory</ServicesH2>
          <ServicesIcon src={Icon6} />
          <ServicesP>
            Deploy App:{" "}
            <a
              href="https://sanjothebay.github.io/user_directory/"
              target="_blank"
              aria-label="github"
            >
              <FaGithubSquare />
            </a>{" "}
            RepoLink:{" "}
            <a
              href="https://github.com/sanjothebay/user_directory"
              target="_blank"
              aria-label="github"
            >
              <FaProjectDiagram />
            </a>
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
