import React from 'react';
import './tech.css'

const Tech = () => {
  return (
    <section className="tech-section container">
      <div className="mx-auto tech-desktop">
        <h1 className="big-header">Tech</h1>

        <p className="tech-paragraph">
        HTML, CSS, Flexbox,<span className="pink"> JavaScript,</span> ES6, JSX,<span className="blue"> React,</span> React Hooks, Redux, Node.js, Mongo
        DB, Web Accessibility, API:s,<span className="light-blue"> mob-programming,</span> pair-programming, Github.
        </p>
      </div>
    </section>
  )
}

export default Tech