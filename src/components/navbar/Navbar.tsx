import { useContext, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaBlog } from "react-icons/fa";
import { BsArrowDownCircle } from "react-icons/bs";
import { PositionContext } from "../../contexts/positionContext";
 
const Navbar = () => {
    const { position } = useContext(PositionContext);

    useEffect(() => {
        const icons = document.querySelectorAll(".navigation .icon");

        icons.forEach(icon => {
            icon.addEventListener("click", () => {
                icons.forEach(icon => {
                    icon.classList.remove("active-nav");
                });
                icon.classList.add("active-nav");
            });
        });
    }, []);

    return (
      <div className="navigation">
        <a href="#home">
          <AiOutlineHome
            className={`icon ${position === "home" ? "active-nav" : ""}`}
          />
        </a>
        <a href="#about">
          <AiOutlineUser
            className={`icon ${position === "about" ? "active-nav" : ""}`}
          />
        </a>
        <a href="#experience">
          <MdWorkOutline
            className={`icon ${position === "experience" ? "active-nav" : ""}`}
          />
        </a>
        <a href="#blog">
          <FaBlog
            className={`icon ${position === "blog" ? "active-nav" : ""}`}
          />
        </a>
        <a href="#contact">
          <BiMessageRoundedDots
            className={`icon ${position === "contact" ? "active-nav" : ""}`}
          />
        </a>
        <a href="#footer">
          <BsArrowDownCircle
            className={`icon ${position === "footer" ? "active-nav" : ""}`}
          />
        </a>
      </div>
    );
};

export default Navbar;