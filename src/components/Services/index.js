import React from "react";
// import { Icon1 } from "../../images/codegenarator";
// import { Icon2 } from "../../images/codegenarator";
// import { Icon3 } from "../../images/codegenarator";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElemeents";

const Services = () => {
  return (
    <ServicesContainer id="Services">
      <ServicesH1>My Portfolio</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>My Application Created 1</ServicesH2>
          <ServicesP> JC's Application and github Repo's 1</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>My Application Created 2</ServicesH2>
          <ServicesP> JC's Application and github Repo's 2</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>My Application Created 3</ServicesH2>
          <ServicesP> JC's Application and github Repo's 3</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
