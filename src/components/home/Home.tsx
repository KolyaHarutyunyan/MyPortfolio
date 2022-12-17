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
            <Observer
                onChange={(isInView) => isInView && handlePosition("home")} 
            />
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
                        I strive to contribute to the success of the team through hard work, attention to detail, and excellent organizational skills.
                    </span>
                    <span>
                        A clear understanding of the stack of network protocols and technologies that I own.
                    </span>
                    <span>
                        Motivated to learn, grow, and succeed in IT.    
                    </span>
                    <span>
                        I'm interested in the best practices for organizing code, and I have a goal and desire to become an architect in my field.
                    </span>
                </p>
            </div>
            <Buttons />
        </div>
    );
};

export default Home;