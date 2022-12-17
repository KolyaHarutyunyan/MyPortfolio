import { useContext } from "react";
import { BsMouse } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti"
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { PositionContext } from "../../contexts/positionContext";
import Observer from "../observer/Observer";

const Footer = () => {
    const { handlePosition } = useContext(PositionContext);

    return (
        <div id="footer" className="container footer-container">
            <Observer
                onChange={(isInView) => isInView && handlePosition("footer")} 
            />
            <h1>
                That's all
                <a href="#home">
                    <h2>
                        <BsMouse />- scroll up-
                    </h2>
                </a>
            </h1>
            <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=100008459111046" target="_blank">
                    <FaFacebookF className="social" />
                </a>
                <a href="https://github.com/KolyaHarutyunyan" target="_blank">
                    <TiSocialGithub className="social" />
                </a>
                <a href="https://www.linkedin.com/in/kolya-harutyunyan-3a11a320b/" target="_blank">
                    <TiSocialLinkedin className="social" />
                </a>
                <a href="https://twitter.com/Kolya80264360" target="_blank">
                    <TiSocialTwitter className="social" />
                </a>
                <a href="https://www.youtube.com/channel/UC_ZQzMOh86mhuT9jnJEQ23Q" target="_blank">
                    <TiSocialYoutube className="social" />
                </a>
            </div>
        </div>
    );
};

export default Footer;