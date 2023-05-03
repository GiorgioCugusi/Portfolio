/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './featured.css';
import Project from './Project';
import chatbot from '../img/chatbot.jpg';
import weather from '../img/weather.jpg';
import guessWho from '../img/guess-who-game.jpg';

const Featured = () => {
  return (
    <section className="projects container">
      <div className="mx-auto">
        <h1 className="big-header">Featured Projects</h1>
        <Project
          img={chatbot}
          title="Chatbot built in Javascript"
          description="The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries."
          tag={['HTML5', 'CSS', 'Javascript']}
          gitLink="https://github.com/GiorgioCugusi/project-chatbot"
          demoLink="https://whimsical-squirrel-abfef6.netlify.app" />
        <Project
          img={weather}
          title="Weather app"
          description="The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries."
          tag={['HTML5', 'CSS', 'Javascript', 'API']}
          gitLink="https://github.com/GiorgioCugusi/project-weather-app"
          demoLink="https://spiffy-fenglisu-24f0f9.netlify.app" />
        <Project
          img={guessWho}
          title="Guess Who Game"
          description="The chat bot app is a conversational AI-powered tool designed to enhance user experience by providing instant, personalized, and automated responses to user inquiries."
          tag={['HTML5', 'CSS', 'Javascript', 'API']}
          gitLink="https://github.com/GiorgioCugusi/project-guess-who"
          demoLink="https://adorable-daifuku-0ac584.netlify.app" />
      </div>
    </section>
  )
}

export default Featured