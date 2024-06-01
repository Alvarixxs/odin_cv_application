import '../fillout.css'
import {useState} from "react";
import NewEducationInput from "./NewEducationInput.jsx";
import ListEducationInput from "./ListEducationInput.jsx";

function EducationInput({isActive, setActive, educations, addEducation, updateEducation}) {
  const [isEdit , setEdit] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  function toggleEdit() {
    setEdit(!isEdit)
    setActiveIndex(-1)
  }
  return (
    <section onClick={isActive ? null : setActive}>
      <h1>Education</h1>
        {isActive ? (
          <div>
            <ListEducationInput activeIndex={activeIndex} setActiveIndex={setActiveIndex} educations={educations} updateEducation={updateEducation}></ListEducationInput>
            {isEdit ? (
            <NewEducationInput
              toggleEdit={toggleEdit}
              addEducation={addEducation}
            >
            </NewEducationInput>
            ) : (
            <button onClick={toggleEdit}>+ Education</button>
              )}
          </div>
          ) : null}
    </section>
  )
}

export default EducationInput