import React from 'react';

export default function Footer(props){
  return(
    <footer className="ftco-footer ftco-section" id="connect-section">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="ftco-footer-widget" style={{textAlign:'center'}}>
              <h2 className="ftco-heading-2">Wanna connect with me?!</h2>
              <ul className="ftco-footer-social list-unstyled">
                <li ><a href={props.resumeData.linkedin} target="_blank" rel="noopener noreferrer"><span className="fa fa-linkedin"></span></a></li>
                { props.resumeData.github && <li ><a href={props.resumeData.github} target="_blank" rel="noopener noreferrer"><span className="fa fa-github"></span></a></li> }
                { props.resumeData.instagram && <li ><a href={props.resumeData.instagram} target="_blank" rel="noopener noreferrer"><span className="fa fa-instagram"></span></a></li> }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
