import '../fillout.css'
import PersonalDetailsInput from "../personalDetailsInput/PersonalDetailsInput.jsx";
import EducationInput from "../educationInput/EducationInput.jsx";
import {useState} from "react";
import ExperienceInput from "../experienceInput/ExperienceInput.jsx";

function CVdata({userFullName, setFullName, email, setEmail, tel, setTel, address, setAddress, educations, addEducation, updateEducation, experiences, addExperience, updateExperience, onClear, onLoad}) {
  const [activeIndex, setActiveIndex] = useState(-1)

  const [isEditEducation, setEditEducation] = useState(false)
  const [activeIndexEducation, setActiveIndexEducation] = useState(-1)

  const [isEditExperience, setEditExperience] = useState(false)
  const [activeIndexExperience, setActiveIndexExperience] = useState(-1)

  function toggleHide() {
    setActiveIndex(-1)
    setEditEducation(false)
    setActiveIndexEducation(-1)
    setEditExperience(false)
    setActiveIndexExperience(-1)
  }

  return (
    <section className="cv-data">
      <PersonalDetailsInput
        isActive={(activeIndex===0)}
        setActive={()=> {
          setActiveIndex(0)
          setActiveIndexEducation(-1)
          setActiveIndexExperience(-1)
          setEditEducation(false)
          setEditExperience(false)
        }}
        toggleHide={toggleHide}
        userFullName={userFullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        tel={tel}
        setTel={setTel}
        address={address}
        setAddress={setAddress}
      >
      </PersonalDetailsInput>
      <EducationInput
        isActive={(activeIndex===1)}
        setActive={()=> {
          setActiveIndex(1)
          setActiveIndexExperience(-1)
          setEditExperience(false)
        }}
        toggleHide={toggleHide}
        isEdit={isEditEducation}
        setEdit={setEditEducation}
        activeIndex={activeIndexEducation}
        setActiveIndex={setActiveIndexEducation}
        educations={educations}
        addEducation={addEducation}
        updateEducation={updateEducation}
      >
      </EducationInput>
      <ExperienceInput
        isActive={activeIndex===2}
        setActive={()=> {
          setActiveIndex(2)
          setActiveIndexEducation(-1)
          setEditEducation(false)
        }}
        toggleHide={toggleHide}
        isEdit={isEditExperience}
        setEdit={setEditExperience}
        activeIndex={activeIndexExperience}
        setActiveIndex={setActiveIndexExperience}
        experiences={experiences}
        addExperience={addExperience}
        updateExperience={updateExperience}
      ></ExperienceInput>
      <div className="button-container-input">
        <button onClick={onClear}>Clear resume.</button>
        <button onClick={onLoad}>Load example.</button>
      </div>
    </section>
  )
}

export default CVdata