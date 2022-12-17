import { useContext } from "react";
import { PositionContext } from "../../contexts/positionContext";
import Observer from "../observer/Observer";

const Experience = () => {
  const { handlePosition } = useContext(PositionContext);

  return (
    <div id="experience" className="container experience-container">
      <Observer
        onChange={(isInView) => isInView && handlePosition("experience")}
      />
      <h1 className="experience-txt">Work Experience</h1>
      <div className="experience experience-1">
        <div className="experience-img" />
        <div className="experience-info">
          <h1 className="name">ITHire</h1>
          <h3 className="position">
            <p>Frontend Developer</p>
            <span>Armenia</span>
            <span>2020 May - 2021 November (19 months)</span>
          </h3>
          <h4 className="about">
            Build web applications on the client-side of development.
          </h4>
          <a href="https://ithire.com/" target="_blank" className="visit">
            visit
          </a>
        </div>
      </div>
      <div className="experience experience-2">
        <div className="experience-img" />
        <div className="experience-info">
          <h1 className="name">Eachbase</h1>
          <h3 className="position">
            <p>Frontend Developer</p>
            <span>Armenia</span>
            <span>2021 November - 2022 November (12 months)</span>
          </h3>
          <h4 className="about">
            Build web applications on the client-side of development.
          </h4>
          <a href="https://eachbase.com/" target="_blank" className="visit">
            visit
          </a>
        </div>
      </div>
      <div className="experience experience-3">
        <div className="experience-img" />
        <div className="experience-info">
          <h1 className="name">Solicy</h1>
          <h3 className="position">
            <p>Software Developer</p>
            <span>Armenia</span>
            <span>2022 December - Present</span>
          </h3>
          <h4 className="about">
            Designing user interactions on websites, developing servers, and
            databases for website functionality.
          </h4>
          <a href="https://solicy.net/" target="_blank" className="visit">
            visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
