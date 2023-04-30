/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Header.css';
import logo from '../img/logo.png';
import CVpic from '../img/CV pic.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="left-header">
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
            <p className="paragraph ">Lorem ipsum sium sium sium sium sium
            </p>
          </section>
          <section className="some-icons">
            <i className="bi bi-linkedin social-i" />
            <i className="bi bi-github social-i" />
            <i className="bi bi-stack-overflow social-i" />
            <i className="bi bi-twitter social-i" />
            <i className="bi bi-instagram social-i" />
          </section>
        </div>
      </div>
      <div className="right-header">
        <section className="devLogo">
          <img src={logo} alt="Logo Giorgio Cugusi Developer" />
        </section>
      </div>
      <section className="arrow-scroll">
        <i className="bi bi-arrow-down-circle arrow-i" />
      </section>
    </div>
  )
}

export default Header