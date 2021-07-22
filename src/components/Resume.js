import React from 'react';

export default function Resume(props){
  return(
    <section className="ftco-section ftco-no-pb goto-here" id="resume-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <nav id="navi">
              <ul>
                <li><a href="#page-1">Education</a></li>
                <li><a href="#page-2">Experience</a></li>
                <li><a href="#page-3">Skills</a></li>
                <li><a href="#page-4">Achievements</a></li>
              </ul>
            </nav>
          </div>
          <div className="col-md-9">

            <div id="page-1" className="page one">
              <h2 className="heading">Education</h2>
              {
                props.resumeData.education && props.resumeData.education.map((item)=>{
                  return(
                    <div className="resume-wrap d-flex ">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span><i class='fa fa-graduation-cap'></i></span>
                      </div>
                      <div className="text pl-3">
                        <span className="date">{item.TermOfStudy}</span>
                        <h2>{item.specialization}</h2>
                        <span className="position">{item.UniversityName}</span>
                        <p>{item.Achievements}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>

            <div id="page-2" className="page two">
              <h2 className="heading">Experience</h2>
              {
                props.resumeData.work && props.resumeData.work.map((item)=>{
                  return(
                    <div className="resume-wrap d-flex ">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span><i class="fa fa-briefcase" aria-hidden="true"></i></span>
                      </div>
                      <div className="text pl-3">
                        <span className="date">{item.Term}</span>
                        <h2>{item.specialization}</h2>
                        <span className="position">{item.Company}</span>
                        <p>{item.Achievements}</p>
                      </div>
                    </div>
                  )
                })
              }
              </div>

              <div id="page-3" className="page three">
                <h2 className="heading">Skills</h2>
                <div className="row">
                {
                  props.resumeData.skills && props.resumeData.skills.map((item)=>{
                    return(
                      <div className="col-md-6 animate-box">
                        <div className="progress-wrap ">
                          <h3>{item.skillname}</h3>
                          <div className="progress">
                            <div className="progress-bar color-1" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:item.percent+"%"}}>
                              <span>{item.percent}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
                </div>
              </div>

              <div id="page-4" className="page four">
                <h2 className="heading">Achievements</h2>
                  {
                    props.resumeData.achievements && props.resumeData.achievements.map((item)=>{
                      return(
                        <div className="resume-wrap d-flex ">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span><i class="fa fa-trophy" aria-hidden="true"></i></span>
                          </div>
                          <div className="text pl-3">
                            <span className="date">{item.year}</span>
                            <h2>{item.award}</h2>
                            <span className="position">{item.authority}</span>
                          </div>
                        </div>
                      )
                    })
                  }
              </div>

            </div>
          </div>
        </div>
      </section>
  );
}
