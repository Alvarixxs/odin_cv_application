import ListExperienceInput from "./ListExperienceInput.jsx";
import NewExperienceInput from "./NewExperienceInput.jsx";
import '../fillout.css'
import Icon from "@mdi/react";
import {mdiBriefcase, mdiChevronLeft, mdiSchool} from "@mdi/js";


function ExperienceInput({isActive, setActive, toggleHide, isEdit, setEdit, activeIndex, setActiveIndex, experiences, addExperience, updateExperience}) {

  function toggleEdit() {
    setEdit(!isEdit);
    setActiveIndex(-1);
  }

  return (
    <section className="section-input">
      <div className="header-input hoverable" onClick={isActive ? toggleHide : setActive}>
        <div className="title-input">
          <Icon path={mdiBriefcase} size={1}/>
          <p>Experience</p>
        </div>
        <div className="icon">
          <Icon path={mdiChevronLeft} size={1}/>
        </div>
      </div>
      {isActive ? (
        <div className="preview-input">
          <ListExperienceInput
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            toggleEdit={() => setEdit(false)}
            experiences={experiences}
            updateExperience={updateExperience}
          >
          </ListExperienceInput>
          {isEdit ? (
            <NewExperienceInput
              toggleEdit={toggleEdit}
              addExperience={addExperience}
            >
            </NewExperienceInput>
          ) : (
            <div>
              <button onClick={toggleEdit}>+ Experience</button>
            </div>
          )}
        </div>
      ) : null}
    </section>
  )
}

export default ExperienceInput