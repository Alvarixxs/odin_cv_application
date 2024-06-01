import '../fillout.css'
import NewEducationInput from "./NewEducationInput.jsx";
import ListEducationInput from "./ListEducationInput.jsx";
import Icon from '@mdi/react';
import {mdiChevronLeft, mdiSchool} from '@mdi/js';

function EducationInput({isActive, setActive, toggleHide, isEdit, setEdit, activeIndex, setActiveIndex, educations, addEducation, updateEducation}) {

  function toggleEdit() {
    setEdit(!isEdit)
    setActiveIndex(-1)
  }

  return (
    <section className="section-input">
      <div className="header-input hoverable" onClick={isActive ? toggleHide : setActive}>
        <div className="title-input">
          <Icon path={mdiSchool} size={1}/>
          <p>Education</p>
        </div>
        <div className="icon">
          <Icon path={mdiChevronLeft} size={1}/>
        </div>
      </div>
      {isActive ? (
        <div className="preview-input">
          <ListEducationInput
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            toggleEdit={() => setEdit(false)}
            educations={educations}
            updateEducation={updateEducation}
          >
          </ListEducationInput>
          {isEdit ? (
            <NewEducationInput
              toggleEdit={toggleEdit}
              addEducation={addEducation}
            >
            </NewEducationInput>
          ) : (
            <div>
              <button onClick={toggleEdit}>+ Education</button>
            </div>
          )}
        </div>
      ) : null}
    </section>
  )
}

export default EducationInput