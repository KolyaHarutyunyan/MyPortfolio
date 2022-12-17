import { useContext } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { PositionContext } from "../../contexts/positionContext";
import Observer from "../observer/Observer";

const Contact = () => {
    const { handlePosition } = useContext(PositionContext);

    return (
        <div id="contact" className="container contact-container">
            <Observer
                onChange={(isInView) => isInView && handlePosition("contact")} 
            />
            <h1>contact me</h1>
            <div className="contact-links">
                <a
                    href="https://github.com/KolyaHarutyunyan"
                    target="_blank"
                    className="contact github"
                >
                    <AiOutlineGithub className="icon" />
                    <h2>
                        github <span>KolyaHarutyunyan</span>
                    </h2>
                </a>
                <a
                    href="https://www.linkedin.com/in/kolya-harutyunyan-3a11a320b/"
                    target="_blank"
                    className="contact linkedin"
                >
                    <AiOutlineLinkedin className="icon" />
                    <h2>
                        linkedin <span>Kolya Harutyunyan</span>
                    </h2>
                </a>
                <a
                    href="https://web.whatsapp.com/"
                    target="_blank"
                    className="contact whatsapp"
                >
                    <AiOutlineWhatsApp className="icon" />
                    <h2>
                        whatsapp <span>+374-98-741-604</span>
                    </h2>
                </a>
            </div>
        </div>
    );
};

export default Contact;