import { useContext } from "react";
import { PositionContext } from "../../contexts/positionContext";
import Observer from "../observer/Observer";
import Qualifications from "../qualifications/Qualifications";

const About = () => {
    const { handlePosition } = useContext(PositionContext);

    return (
        <div id="about" className="container about-container">
            <Observer
                onChange={(isInView) => isInView && handlePosition("about")} 
            />
            <Qualifications />
        </div>
    );
};

export default About;