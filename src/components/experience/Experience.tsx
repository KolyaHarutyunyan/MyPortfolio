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
            <span>May 2018 - November 2021</span>
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
            <span>November 2021 - November 2022</span>
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
            <span>December 2022 - February 2023</span>
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
      <div className="experience experience-4">
        <div className="experience-img" />
        <div className="experience-info">
          <h1 className="name">Marpla</h1>
          <h3 className="position">
            <p>Senior Frontend Developer</p>
            <span>Russia</span>
            <span>March 2023 - August 2023</span>
          </h3>
          <h4 className="about">
            Development of system functionality and many more.
          </h4>
          <a href="https://marpla.ru/" target="_blank" className="visit">
            visit
          </a>
        </div>
      </div>
      <div className="experience experience-5">
        <div className="experience-img" />
        <div className="experience-info">
          <h1 className="name">TripShock</h1>
          <h3 className="position">
            <p>Frontend Developer</p>
            <span></span>
            <span>August 2023 - Present</span>
          </h3>
          <h4 className="about">
            Build web applications on the client-side of development.
          </h4>
          <a
            href="https://www.tripshock.com/"
            target="_blank"
            className="visit"
          >
            visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
