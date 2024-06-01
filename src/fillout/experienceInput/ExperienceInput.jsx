import {useState} from "react";
import ListExperienceInput from "./ListExperienceInput.jsx";
import NewExperienceInput from "./NewExperienceInput.jsx";

function ExperienceInput({isActive, setActive, experiences, addExperience}) {
  const [isEdit, setEdit] = useState(false);

  function toggleEdit() {
    setEdit(!isEdit);
  }

  return (
    <div onClick={isActive ? null: setActive}>
      <h1>Experience</h1>
      {isActive ? (
        <div>
          <ListExperienceInput
            experiences={experiences}
          >
          </ListExperienceInput>
          {isEdit ? (
            <NewExperienceInput
              toggleEdit={toggleEdit}
              addExperience={addExperience}
            >
            </NewExperienceInput>
          ) : (
            <button onClick={toggleEdit}>+ Experience</button>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default ExperienceInput