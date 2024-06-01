import '../fillout.css'
import PersonalDetailsInput from "../personalDetailsInput/PersonalDetailsInput.jsx";
import EducationInput from "../educationInput/EducationInput.jsx";
import {useState} from "react";
import ExperienceInput from "../experienceInput/ExperienceInput.jsx";

function CVdata({userFullName, setFullName, email, setEmail, tel, setTel, address, setAddress, educations, addEducation, updateEducation, experiences, addExperience, updateExperience}) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section>
      <PersonalDetailsInput
        isActive={(activeIndex===0)}
        setActive={()=>setActiveIndex(0)}
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
        setActive={()=>setActiveIndex(1)}
        educations={educations}
        addEducation={addEducation}
        updateEducation={updateEducation}
      >
      </EducationInput>
      <ExperienceInput
        isActive={activeIndex===2}
        setActive={()=>setActiveIndex(2)}
        experiences={experiences}
        addExperience={addExperience}
      ></ExperienceInput>
    </section>
  )
}

export default CVdata