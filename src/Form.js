import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import "./components/css/formStyles.css";
import { useHistory } from "react-router-dom";

function Form(){
  const {
    register,
    handleSubmit, formState: { errors }
  } = useForm();

  const history = useHistory();

  const [eduInputFields, setEduInputFields] = useState([
    { UniversityName: '', specialization: '', TermOfStudy: '', Achievements: '' }
  ]);

  const [workInputFields, setWorkInputFields] = useState([
    { CompanyName: '', specialization: '', Term: '', Achievements: '' }
  ]);

  const [skillInputFields, setSkillInputFields] = useState([
    { skillname: '', percent: '' }
  ]);

  const [projectInputFields, setProjectInputFields] = useState([
    { name: '', description: '', imgurl: '', link: '' }
  ]);

  const [achieveInputFields, setAchieveInputFields] = useState([
    { year: '', award: '', authority: '' }
  ]);

  const handleEduAddFields = () => {
    const values = [...eduInputFields];
    values.push({ UniversityName: '', specialization: '', TermOfStudy: '', Achievements: '' });
    setEduInputFields(values);
  };

  const handleEduRemoveFields = index => {
    const values = [...eduInputFields];
    values.splice(index, 1);
    setEduInputFields(values);
  };

  const handleEduInputChange = (index, event) => {
    const values = [...eduInputFields];
    if (event.target.name === "UniversityName") {
      values[index].UniversityName = event.target.value;
    }
    else if (event.target.name === "specialization") {
      values[index].specialization = event.target.value;
    }
    else if (event.target.name === "TermOfStudy") {
      values[index].TermOfStudy = event.target.value;
    }
    else {
      values[index].Achievements = event.target.value;
    }

    setEduInputFields(values);
  };

  const handleWorkAddFields = () => {
    const values = [...workInputFields];
    values.push({ CompanyName: '', specialization: '', Term: '', Achievements: '' });
    setWorkInputFields(values);
  };

  const handleWorkRemoveFields = index => {
    const values = [...workInputFields];
    values.splice(index, 1);
    setWorkInputFields(values);
  };

  const handleWorkInputChange = (index, event) => {
    const values = [...workInputFields];
    if (event.target.name === "CompanyName") {
      values[index].CompanyName = event.target.value;
    }
    else if (event.target.name === "specialization") {
      values[index].specialization = event.target.value;
    }
    else if (event.target.name === "Term") {
      values[index].Term = event.target.value;
    }
    else {
      values[index].Achievements = event.target.value;
    }

    setWorkInputFields(values);
  };

  const handleSkillAddFields = () => {
    const values = [...skillInputFields];
    values.push({ skillname: '', percent: ''});
    setSkillInputFields(values);
  };

  const handleSkillRemoveFields = index => {
    const values = [...skillInputFields];
    values.splice(index, 1);
    setSkillInputFields(values);
  };

  const handleSkillInputChange = (index, event) => {
    const values = [...skillInputFields];
    if (event.target.name === "skillname") {
      values[index].skillname = event.target.value;
    }
    else{
      values[index].percent = event.target.value;
    }

    setSkillInputFields(values);
  };

  const handleProjectAddFields = () => {
    const values = [...projectInputFields];
    values.push({ name: '', description: '', imgurl: '', link: '' });
    setProjectInputFields(values);
  };

  const handleProjectRemoveFields = index => {
    const values = [...projectInputFields];
    values.splice(index, 1);
    setProjectInputFields(values);
  };

  const handleProjectInputChange = (index, event) => {
    const values = [...projectInputFields];
    if (event.target.name === "name") {
      values[index].name = event.target.value;
    }
    else if (event.target.name === "description") {
      values[index].description = event.target.value;
    }
    else if (event.target.name === "imgurl") {
      values[index].imgurl = event.target.value;
    }
    else {
      values[index].link = event.target.value;
    }

    setProjectInputFields(values);
  };

  const handleAchieveAddFields = () => {
    const values = [...achieveInputFields];
    values.push({ year: '', award: '', authority: ''});
    setAchieveInputFields(values);
  };

  const handleAchieveRemoveFields = index => {
    const values = [...achieveInputFields];
    values.splice(index, 1);
    setAchieveInputFields(values);
  };

  const handleAchieveInputChange = (index, event) => {
    const values = [...achieveInputFields];
    if (event.target.name === "year") {
      values[index].year = event.target.value;
    }
    else if (event.target.name === "award") {
      values[index].award = event.target.value;
    }
    else {
      values[index].authority = event.target.value;
    }

    setAchieveInputFields(values);
  };

  const onSubmit = (data) =>
    {
      const dynamic_data={"education":eduInputFields, "work":workInputFields,"skills":skillInputFields, "projects":projectInputFields, "achievements":achieveInputFields};
      const obj={...data,...dynamic_data};
      sessionStorage.setItem('resumeData',JSON.stringify(obj));
      history.push({ pathname: '/portfolio' });
    };

  return (
    <div className="FormPage">
    <h1>Portfolio Generation Form</h1>
    <p>(*) marked fields are required</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name *</label> <input {...register('firstName', { required: true })} />
          {errors.firstName && <span>This field is required</span>}

      <label>Last Name *</label> <input {...register('lastName', { required: true })} />
          {errors.lastName && <span>This field is required</span>}

      <label>career roles [Seperate roles with comma] *</label> <input {...register('roles', { required: true })} />
          {errors.roles && <span>This field is required</span>}

      <label>Career description *</label> <input {...register('roleDescription', { required: true })} />
          {errors.roleDescription && <span>This field is required</span>}

      <label>About yourself *</label> <input {...register('aboutme', { required: true })} />
          {errors.aboutme && <span>This field is required</span>}

      <label>location *</label> <input {...register('location', { required: true })} />
          {errors.location && <span>This field is required</span>}

      <label>zipcode *</label> <input {...register('zipcode', { required: true })} />
          {errors.zipcode && <span>This field is required</span>}

      <label>email *</label> <input {...register('email', { required: true })} />
          {errors.email && <span>This field is required</span>}

      <label>phone *</label> <input {...register('phone', { required: true })} />
          {errors.phone && <span>This field is required</span>}

      <label>Your photo URL *</label> <input {...register('photo', { required: true })} />
          {errors.photo && <span>This field is required</span>}

      <label>LinkedIn URL</label> <input {...register('linkedin')} />
      <label>Github URL</label> <input {...register('github')} />
      <label>Instagram URL</label> <input {...register('instagram')} />
      <br/>

      <h2>Education Details</h2>
      <div>
        {eduInputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <div>
              <label htmlFor="UniversityName">University Name</label>
              <input
                type="text"
                id="UniversityName"
                name="UniversityName"
                value={inputField.UniversityName}
                onChange={event => handleEduInputChange(index, event)}
              />
            </div>
            <div>
              <label htmlFor="specialization">Specialization</label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={inputField.specialization}
                onChange={event => handleEduInputChange(index, event)}
              />
            </div>
            <div>
              <label htmlFor="TermOfStudy">Term of Study</label>
              <input
                type="text"
                id="TermOfStudy"
                name="TermOfStudy"
                value={inputField.TermOfStudy}
                onChange={event => handleEduInputChange(index, event)}
              />
            </div>
            <div>
              <label htmlFor="Achievements">Achievements</label>
              <input
                type="text"
                id="Achievements"
                name="Achievements"
                value={inputField.Achievements}
                onChange={event => handleEduInputChange(index, event)}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={() => handleEduRemoveFields(index)}
              >
                Remove Section
              </button>
            </div>
          </Fragment>
        ))}
        <button
          type="button"
          onClick={() => handleEduAddFields()}
        >
          Add Section
        </button>
      </div>
      <br/>

      <h2>Work Experience Details</h2>
      <div>
        {workInputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <div>
              <label htmlFor="CompanyName">Company Name</label>
              <input
                type="text"
                id="CompanyName"
                name="CompanyName"
                value={inputField.CompanyName}
                onChange={event => handleWorkInputChange(index, event)}
              />
            </div>
            <div>
              <label htmlFor="specialization">Designation</label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                value={inputField.specialization}
                onChange={event => handleWorkInputChange(index, event)}
              />
            </div>
            <div>
              <label htmlFor="Term">Term of Service</label>
              <input
                type="text"
                id="Term"
                name="Term"
                value={inputField.Term}
                onChange={event => handleWorkInputChange(index, event)}
              />
            </div>
            <div>
              <label htmlFor="Achievements">Achievements</label>
              <input
                type="text"
                id="Achievements"
                name="Achievements"
                value={inputField.Achievements}
                onChange={event => handleWorkInputChange(index, event)}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={() => handleWorkRemoveFields(index)}
              >
                Remove Section
              </button>
            </div>
          </Fragment>
        ))}
        <button
          type="button"
          onClick={() => handleWorkAddFields()}
        >
          Add Section
        </button>
      </div>
      <br/>

      <h2>Skill Set</h2>
      <div>
        {skillInputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <div>
              <label htmlFor="skillname">Skill</label>
              <input
                type="text"
                id="skillname"
                name="skillname"
                value={inputField.skillname}
                onChange={event => handleSkillInputChange(index, event)}
              />
            </div>
            <div>
              <label htmlFor="percent">Expertisation percent</label>
              <input
                type="text"
                id="percent"
                name="percent"
                value={inputField.percent}
                onChange={event => handleSkillInputChange(index, event)}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={() => handleSkillRemoveFields(index)}
              >
                Remove Section
              </button>
            </div>
          </Fragment>
        ))}
        <button
          type="button"
          onClick={() => handleSkillAddFields()}
        >
          Add Section
        </button>
      </div>
      <br/>

      <h2>Project Experience</h2>
      <div>
        {projectInputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <div>
              <label htmlFor="name">Project Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputField.name}
                onChange={event => handleProjectInputChange(index, event)}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                name="description"
                value={inputField.description}
                onChange={event => handleProjectInputChange(index, event)}
              />
            </div>
            <div>
              <label htmlFor="imgurl">Image URL</label>
              <input
                type="text"
                id="imgurl"
                name="imgurl"
                value={inputField.imgurl}
                onChange={event => handleProjectInputChange(index, event)}
              />
            </div>
            <div>
              <label htmlFor="link">Project link</label>
              <input
                type="text"
                id="link"
                name="link"
                value={inputField.link}
                onChange={event => handleProjectInputChange(index, event)}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={() => handleProjectRemoveFields(index)}
              >
                Remove Section
              </button>
            </div>
          </Fragment>
        ))}
        <button
          type="button"
          onClick={() => handleProjectAddFields()}
        >
          Add Section
        </button>
      </div>
      <br/>

      <h2>Awards/Achievements</h2>
      <div>
        {achieveInputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <div>
              <label htmlFor="year">Year</label>
              <input
                type="text"
                id="year"
                name="year"
                value={inputField.year}
                onChange={event => handleAchieveInputChange(index, event)}
              />
            </div>
            <div>
              <label htmlFor="award">Award</label>
              <input
                type="text"
                id="award"
                name="award"
                value={inputField.award}
                onChange={event => handleAchieveInputChange(index, event)}
              />
            </div>
            <div>
              <label htmlFor="authority">Organisation</label>
              <input
                type="text"
                id="authority"
                name="authority"
                value={inputField.authority}
                onChange={event => handleAchieveInputChange(index, event)}
              />
            </div>
            <div>
              <button
                type="button"
                onClick={() => handleAchieveRemoveFields(index)}
              >
                Remove Section
              </button>
            </div>
          </Fragment>
        ))}
        <button
          type="button"
          onClick={() => handleAchieveAddFields()}
        >
          Add Section
        </button>
      </div>
      <input type="submit"/>
    </form>
    </div>
  );
};

export default Form;
