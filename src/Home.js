import React from 'react';
import { useHistory } from "react-router-dom";
import "./components/css/homeStyles.css";

function Home(){
  const handleCreate = () => {
    history.push("/form");
  };

  const history = useHistory();

  return(
    <div className="tm-main-container">
      <div className="tm-top-container">
        <nav id="tmNav" className="tm-nav">
        </nav>

        <header className="tm-site-header-box tm-bg-dark">
          <h1 className="tm-site-title">Portfolio Generator</h1>
          <p className="mb-0 tm-site-subtitle">Creating a portfolio is as simple as filling a form</p>
        </header>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="tm-content">
              <section className="tm-section tm-section-0">
                <div className="tm-textbox tm-bg-dark">
                <h2 className="tm-section-title mb-3 font-weight-bold">
                  Make it simple
                </h2>
                  <p>
                    Creating a portfolio is facile with a simple portfolio generator.
                  </p>
                  <p className="mb-0">
                    Just fill out the form and BOOM!<br/>Your portfolio is ready to wield :)
                  </p><br/>
                  <a className="buttonHome" href="https://preview.colorlib.com/theme/ronaldo/" target="_blank" rel="noopener noreferrer"><span>Template</span></a>
                  <button className="buttonHome" onClick={handleCreate}><span>Create</span></button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
