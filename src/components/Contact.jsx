/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './contact.css';
import CVpic from '../img/CV pic.jpg'

const Contact = () => {
  return (
    <footer className="contact container">
      <div className="mx-auto">
        <h1 className="big-header">Time to talk</h1>
        <section className="contact-info">
          <div className="header-intro">
            <div className="header-img">
              <img src={CVpic} alt="picture of Giorgio Cugusi" />
            </div>
            <div className="titles">
              <h1 className="name">Giorgio Cugusi</h1>
              <h2 className="big-title">Front end developer</h2>
              <h3 className="small-title">+ project manager</h3>
            </div>
          </div>
          <div className="summary-icons">
            <section className="description">
              <h3 className="paragraph ">
                        +46(0)723641115 <br />
                        +393403333201 <br />
                        giorgio.cugusi@gmail.com
              </h3>
            </section>
            <section className="some-icons">
              <i className="bi bi-linkedin social-i" />
              <i className="bi bi-github social-i" />
              <i className="bi bi-stack-overflow social-i" />
              <i className="bi bi-twitter social-i" />
              <i className="bi bi-instagram social-i" />
            </section>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Contact
