/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */
import React from 'react';
import './featured.css'

const Project = (props) => {
  return (
    <section className="project-description">
      <div className="project-img-container">
        <img className="project-img" src={props.img} alt={props.title} />
      </div>
      <div className="project-summary">
        <h2 className="decription-header">{props.title}</h2>
        <p className="paragraph">{props.description}</p>
        <section className="project-languages">
          {props.tag.map((tag) => {
            return (
              <span className="black">{tag}</span>
            )
          })}
        </section>

        <section className="project-buttons">
          <a href={props.gitLink} className="project-btn">
                    View the code
          </a>
          <a href={props.demoLink} className="project-btn">
                    Live demo
          </a>
        </section>
      </div>
    </section>
  )
}

export default Project