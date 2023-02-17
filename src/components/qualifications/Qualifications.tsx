const Qualifications = () => {
    return (
      <div className="qualifications">
        <span className="quali-text">Professional Skills</span>
        <div className="qualifications-container">
          <div className="qualification pro-skill">
            <div className="pro-skill-block">
              <div className="content html5" />
              <div className="content css3" />
            </div>
            <div className="pro-skill-block">
              <div className="content sass" />
              <div className="content js" />
            </div>
          </div>
          <div className="qualification pro-skill">
            <div className="pro-skill-block">
              <div className="content react" />
              <div className="content remix" />
            </div>
            <div className="pro-skill-block">
              <div className="content node" />
              <div className="content express" />
            </div>
          </div>
          <div className="qualification pro-skill">
            <div className="pro-skill-block">
              <div className="content tailwind" />
              <div className="content material" />
            </div>
            <div className="pro-skill-block">
              <div className="content bootstrap" />
              <div className="content styled-components" />
            </div>
          </div>
          <div className="qualification pro-skill">
            <div className="pro-skill-block">
              <div className="content jira" />
              <div className="content trello" />
            </div>
            <div className="pro-skill-block">
              <div className="content slack" />
              <div className="content space" />
            </div>
          </div>
          <div className="qualification pro-skill">
            <div className="pro-skill-block">
              <div className="content ts" />
              <div className="content swagger" />
            </div>
            <div className="pro-skill-block">
              <div className="content npm" />
              <div className="content git" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Qualifications;