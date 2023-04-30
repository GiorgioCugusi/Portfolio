/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import chatbot from '../img/chatbot.jpg';
import './featured.css'

const Featured = () => {
  return (
    <section className="projects container">
      <div className="mx-auto">
        <h1 className="big-header">Featured Projects</h1>
        <section className="project-description">
          <div className="project-img-container">
            <img className="project-img" src={chatbot} alt="image of chatbot" />
          </div>
          <div className="project-summary">
            <h2 className="decription-header">Chatbot built in Javascript</h2>
            <p className="paragraph">The chat bot app is a conversational AI-powered tool designed to
                enhance user experience by providing instant, personalized, and automated responses
                to user inquiries.
            </p>
            <section className="project-languages">
              <p className="black">HTML5</p>
              <p className="black">CSS3</p>
              <p className="black">Javascript</p>
            </section>

            <section className="project-buttons">
              <button className="project-btn" type="button">
                    View the code
              </button>
              <button className="project-btn" type="button">
                    Live demo
              </button>
            </section>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Featured