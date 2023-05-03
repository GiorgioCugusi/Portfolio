import React from 'react';
import './skill.css'

const Skill = () => {
  return (
    <section className="skills container">
      <div className="skills-tablet mx-auto">
        <h1 className="big-header">Skills</h1>
        <div className="skill-grid">
          <section className="skills-list">
            <h3 className="skills-code"><span className="color">Code</span></h3>
            <ul className="skills-paragraph">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript ES6</li>
              <li>Github</li>
            </ul>
          </section>
          <section className="skills-list">
            <h3 className="skills-code"><span className="color">Toolbox</span></h3>
            <ul className="skills-paragraph">
              <li>Adobe Photoshop</li>
              <li>Adobe illustrator</li>
              <li>Figma</li>
              <li>Slack</li>
              <li>Google Analytics</li>
              <li>Google Data studio</li>
              <li>Microsoft Power BI</li>
            </ul>
          </section>
          <section className="skills-list">
            <h3 className="skills-code"><span className="color">More</span></h3>
            <ul className="skills-paragraph">
              <li>Agile methodology</li>
              <li>Scrum methodology</li>
              <li>Project manager</li>
              <li>Google Analytics</li>
            </ul>
          </section>
          <section className="skills-list">
            <h3 className="skills-code"><span className="color">Upcoming</span></h3>
            <ul className="skills-paragraph">
              <li>React</li>
              <li>Redux</li>
              <li>Node.js</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Skill