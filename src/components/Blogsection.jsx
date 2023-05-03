import React, { useState } from 'react';
import Modal from './Modal.jsx';
import Blog from './Blog.jsx';
import blog1 from '../img/blog1.jpg'

const Blogsection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="blog-section container">
      <Modal open={isOpen}>
        <div className="modal">
          <button className="modal-close" onClick={() => setIsOpen(false)} type="button">
          X
          </button>
          <div className="modal-content" />
        </div>
      </Modal>
      <div className="mx-auto">
        <h1 className="big-header">My words</h1>
        <div className="articles">
          <Blog
            setIsOpen={setIsOpen}
            img={blog1}
            title="What is coding"
            date="April 2023"
            description="Writing code is less about “just working”. Instead, it's much more about creativity. It's similar to creative writing in that the author architecting a story must use an assortment of tools and components (i.e., content) in a way to satisfy a particular objective." />
        </div>
      </div>
    </section>
  )
}

export default Blogsection