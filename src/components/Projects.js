import React from 'react';

export default function Projects(props){
  return(
    <section className="ftco-section ftco-project" id="projects-section">
      <div className="container-fluid px-md-0">
        <div className="row no-gutters justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ">
            <h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">My Projects</h2>
          </div>
          </div>
          <div className="row no-gutters">
            {
              props.resumeData.projects && props.resumeData.projects.map((item)=>{
                return(
                  <div className="col-md-4">
                    <div className="project img  d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${item.imgurl})` }}>
                      <div className="overlay"></div>
                        <div className="text text-center p-4">
                          <h3><a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a></h3>
                          <span>{item.description}</span>
                        </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
  );
}
