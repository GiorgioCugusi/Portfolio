/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable max-len */
import React from 'react';
import './blog.css';

const Blog = (props) => {
  return (
    <section className="blog-post-description">
      <div className="blog-img-container">
        <img className="blog-img" src={props.img} alt={props.title} />
      </div>
      <section className="blog-post-title">
        <p className="date">{props.date}</p>
        <h2 className="decription-header">{props.title}</h2>
      </section>
      <p className="paragraph">{props.description}</p>
      <section className="blog-buttons">
        {props.setIsOpen && (
          <button className="blog-btn" onClick={() => { props.setIsOpen(true) }} type="button">
          Read the article
          </button>
        )}
      </section>
    </section>
  )
}

export default Blog