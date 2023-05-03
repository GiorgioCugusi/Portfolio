import React from 'react';
import Tech from 'components/Tech';
import Featured from 'components/Featured';
import Blogsection from 'components/Blogsection';
import Skill from 'components/Skill';
import Contact from 'components/Contact';
import Header from './components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Tech />
      <Featured />
      <Blogsection />
      <Skill />
      <Contact />
    </>
  )
}
