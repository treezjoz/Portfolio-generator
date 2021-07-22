import React from 'react';

export default function Header(props){
  const roles=props.resumeData.roles.split(',');

  let switches = document.getElementsByClassName('switch');
  let style = localStorage.getItem('style');

  if (style == null) { setTheme('light'); }
  else { setTheme(style); }

  for (let i of switches) {
    i.addEventListener('click', function () {
      let theme = this.dataset.theme;
      console.log(theme);
      setTheme(theme);
  });}

  function setTheme(theme) {
  if (theme == 'blue') {
    document.getElementById('switcher-id').href = './css/blue.css';
  } else if (theme == 'green') {
    document.getElementById('switcher-id').href = './css/green.css';
  } else if (theme == 'red') {
    document.getElementById('switcher-id').href = './css/red.css';
  } else if (theme == 'pink') {
    document.getElementById('switcher-id').href = './css/pink.css';
  }
  localStorage.setItem('style', theme);
  }

  return(
    <div id="home-section">
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html"><span>{props.resumeData.firstName[0]}</span>{props.resumeData.firstName.slice(1)}</a>
        <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa fa-bars"></i> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
            <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
            <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
            <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
            <li className="nav-item"><a href="#connect-section" className="nav-link"><span>Contact</span></a></li>
            <li>
            <div className="theme-switches">
              <button className="switch" id="switch-1" data-theme="blue"></button>
              <button className="switch" id="switch-2" data-theme="green"></button>
              <button className="switch" id="switch-3" data-theme="red"></button>
              <button className="switch" id="switch-4" data-theme="pink"></button>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section className="hero-wrap js-fullheight">
      <div className="overlay"></div>
      <div className="container">
      <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center" style={{height:'968px'}}>
          <div className="d-flex align-items-center">
            <div className="text text-center">
              <span className="subheading">Hey! I am</span>
              <h1>{props.resumeData.firstName} {props.resumeData.lastName}</h1>
              <h2>I'm a &nbsp;
                <span className="txt-rotate" data-period="2000" data-rotate={JSON.stringify(roles)}></span>
              </h2>
            </div>
          </div>
        </div>
    <div className="mouse">
      <a href="#about-section" className="mouse-icon">
        <div className="mouse-wheel"><span><i class="fa fa-hand-o-down" aria-hidden="true"></i></span></div>
      </a>
    </div>
    </div>
    </section>
    </div>
  );
}
