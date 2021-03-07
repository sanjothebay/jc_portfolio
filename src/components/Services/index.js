import React from "react";
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
          <ServicesP> JC's Application and github Repo's 1</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Weather App</ServicesH2>
          <ServicesIcon src={Icon2} />
          <ServicesP> JC's Application and github Repo 2</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Day Planner</ServicesH2>
          <ServicesIcon src={Icon3} />
          <ServicesP> JC's Application and github Repo 3</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2> Chore Project app</ServicesH2>
          <ServicesIcon src={Icon4} />
          <ServicesP> JC's Application and github Repo 4</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Team Profile Genarator</ServicesH2>
          <ServicesIcon src={Icon5} />
          <ServicesP> JC's Application and github Repo 5</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>User Directory</ServicesH2>
          <ServicesIcon src={Icon6} />
          <ServicesP> JC's Application and github Repo 6</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
