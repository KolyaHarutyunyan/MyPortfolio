import { useContext } from "react";
import { PositionContext } from "../../contexts/positionContext";
import Observer from "../observer/Observer";
import myProjects from "./myProjects";

const Blog = () => {
  const { handlePosition } = useContext(PositionContext);

  return (
    <div id="blog" className="container blog-container">
      <Observer onChange={(isInView) => isInView && handlePosition("blog")} />
      <h1>projects</h1>
      <div className="blog-links">
        {myProjects.map((project) => (
          <a
            key={project.name}
            href={project.websiteUrl}
            target="_blank"
            className="blog github"
          >
            <div className="icon">
              <img src={project.thumbnailUrl} alt={`${project.name}-thumbnail`} />
            </div>
            <h2>
              {project.name}
              <p title={project.stack.join(" ")}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </p>
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
