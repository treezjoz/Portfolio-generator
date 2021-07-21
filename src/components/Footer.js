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
                <li ><a href={props.resumeData.linkedin}><span className="fa fa-linkedin"></span></a></li>
                <li ><a href={props.resumeData.github}><span className="fa fa-github"></span></a></li>
                <li ><a href={props.resumeData.instagram}><span className="fa fa-instagram"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
