import { useContext } from "react";
import { BsMouse } from "react-icons/bs";
import { PositionContext } from "../../contexts/positionContext";
import Buttons from "../button/Button";
import Observer from "../observer/Observer";
// @ts-ignore
import avatar from "../../assets/images/avatar.svg";

const Home = () => {
    const { handlePosition } = useContext(PositionContext);

    return (
      <div id="home" className="container home-container">
        <Observer onChange={(isInView) => isInView && handlePosition("home")} />
        <div className="avatar">
          <div className="main-img">
            <span className="circle" />
            <span className="circle" />
            <span className="circle" />
            <span className="circle" />
            <span className="circle" />
            <span className="circle" />
            <span className="circle" />
            <span className="circle" />
          </div>
          <div className="img-wrapper">
            <div className="main-avatar">
              <img src={avatar} alt="avatar" />
            </div>
          </div>
        </div>
        <a href="#footer" className="scroll-down">
          <hr />
          <h5>scroll down</h5>
          <BsMouse className="scroll" />
          <hr />
        </a>
        <div className="about-me">
          <span className="title">About Me</span>
          <p>
            <span>
              Respected Frontend Developer with about 3 years of experience in
              collaborating with creative and development teams on the execution
              of ideas and projects
            </span>
            <div className="key-skills-box">
              <span>Key skills include:</span>
              <ul>
                <li>
                  <span>● Promoting and communicating new ideas</span>
                </li>
                <li>
                  <li>
                    <span>● Creating process improvements</span>
                  </li>
                  <li>
                    <span>● Instituting new technologies</span>
                  </li>
                  <li>
                    <span>● Writing maintainable cross-browser code</span>
                  </li>
                  <li>
                    <span>● Estimating time and costs for projects</span>
                  </li>
                </li>
                <li>
                  <span>● Ensuring code is scalable and responsive</span>
                </li>
              </ul>
            </div>
            <span>
              A clear understanding of the stack of network protocols and
              technologies that I own.
            </span>
            <span>Motivated to learn, grow, and succeed in IT.</span>
            <span>
              I'm interested in the best practices for organizing code, and I
              have a goal and desire to become an architect in my field.
            </span>
          </p>
        </div>
        <Buttons />
      </div>
    );
};

export default Home;