import React from 'react';

export default function About(props){
  return(
    <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section" >
      <div className="container">
        <div className="row d-flex no-gutters">
          <div className="col-md-6 col-lg-6 d-flex">
            <div className="img-about img d-flex align-items-stretch" style={{ backgroundImage: `url(${props.resumeData.photo})` }}>
              <div className="overlay"></div>
              <div className="img d-flex align-self-stretch align-items-center">
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 pl-md-5 py-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <p>{props.resumeData.aboutme}</p>
                <p>{props.resumeData.roleDescription}</p>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex"><span>Name:</span> <span>{props.resumeData.firstName} {props.resumeData.lastName}</span></li>
                  <li className="d-flex"><span>Location:</span> <span>{props.resumeData.location}</span></li>
                  <li className="d-flex"><span>Zip code:</span> <span>{props.resumeData.zipcode}</span></li>
                  <li className="d-flex"><span>Email:</span> <span>{props.resumeData.email}</span></li>
                  <li className="d-flex"><span>Phone: </span> <span>{props.resumeData.phone}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
