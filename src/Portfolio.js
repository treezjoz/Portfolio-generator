import React from 'react';
import Header from './components/Header'
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';

function Portfolio() {
  const resumeData=JSON.parse(sessionStorage.getItem('resumeData'));

  return (
    <div>
      <Header resumeData={resumeData}/>
      <About resumeData={resumeData}/>
      <Resume resumeData={resumeData}/>
      <Projects resumeData={resumeData}/>
      <Footer resumeData={resumeData}/>
    </div>
  );
}

export default Portfolio;
