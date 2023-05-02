/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './featured.css';
import Project from './Project';
import chatbot from '../img/chatbot.jpg'

const Featured = () => {
  return (
    <section className="projects container">
      <div className="mx-auto">
        <h1 className="big-header">Featured Projects</h1>
        <Project
          img={chatbot}
          title="Chatbot built in Javascript"
          description="The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries."
          tag={['html', 'css']}
          gitLink="https://github.com/GiorgioCugusi/project-chatbot"
          demoLink="https://whimsical-squirrel-abfef6.netlify.app" />
      </div>
    </section>
  )
}

export default Featured