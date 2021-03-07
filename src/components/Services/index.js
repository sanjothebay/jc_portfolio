import React from "react";
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
            Deploy App:
            <FaGithubSquare />
            --RepoLink:
            <FaProjectDiagram />
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Weather App</ServicesH2>
          <ServicesIcon src={Icon2} />
          <ServicesP>
            Deploy App:
            <FaGithubSquare />
            --RepoLink:
            <FaProjectDiagram />
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Day Planner</ServicesH2>
          <ServicesIcon src={Icon3} />
          <ServicesP>
            Deploy App:
            <FaGithubSquare />
            --RepoLink:
            <FaProjectDiagram />
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2> Chore Project app</ServicesH2>
          <ServicesIcon src={Icon4} />
          <ServicesP >
            Deploy App:
            <FaGithubSquare />
            --RepoLink:
            <FaProjectDiagram />
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Team Profile Genarator</ServicesH2>
          <ServicesIcon src={Icon5} />
          <ServicesP>
            Deploy App:
            <FaGithubSquare />
            --RepoLink:
            <FaProjectDiagram />
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>User Directory</ServicesH2>
          <ServicesIcon src={Icon6} />
          <ServicesP>
            Deploy App:
            <FaGithubSquare />
            --RepoLink:
            <FaProjectDiagram />
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
