
function ListExperienceInput({activeIndex, setActiveIndex, toggleEdit, experiences, updateExperience}) {
  return (
    <div className="preview-input">
      {experiences.map((experience, i) =>
        <SingleExperienceInput
          key={experience.key}
          isActive={activeIndex === i}
          setActive={()=>{
            setActiveIndex(i)
            toggleEdit()
          }}
          experience={experience}
          updateExperience={(company,posTitle,startDate, endDate, location, descr)=>updateExperience(company,posTitle,startDate,endDate,location,descr)}
        >
        </SingleExperienceInput>)}
    </div>
  )
}

function SingleExperienceInput({isActive, setActive, experience, updateExperience}) {
  return (
    <div className={isActive ? "per-input": "per-input hoverable"} onClick={isActive ? null : setActive}>
      {isActive ? (
        <form>
          <label htmlFor="input-company">School</label>
          <input type="text" id="input-company" value={experience.company} onChange={(e)=>updateExperience(e.target.value, experience.posTitle, experience.startDate, experience.endDate, experience.location, experience.descr)}/>
          <label htmlFor="input-posTitle">Degree</label>
          <input type="text" id="input-posTitle" value={experience.posTitle} onChange={(e)=>updateExperience(experience.company, e.target.value, experience.startDate, experience.endDate, experience.location, experience.descr)}/>
          <label htmlFor="input-startDate">Start date</label>
          <input id="input-startDate" type="text" value={experience.startDate} onChange={(e)=>updateExperience(experience.company, experience.posTitle, e.target.value, experience.endDate, experience.location, experience.descr)}/>
          <label htmlFor="input-endDate">End date</label>
          <input type="text" id="input-endDate" value={experience.endDate} onChange={(e)=>updateExperience(experience.company, experience.posTitle, experience.startDate, e.target.value, experience.location, experience.descr)}/>
          <label htmlFor="input-location">Location</label>
          <input type="text" id="input-location" value={experience.location} onChange={(e)=>updateExperience(experience.company, experience.posTitle, experience.startDate, experience.endDate, e.target.value, experience.descr)}/>
          <label htmlFor="input-descr">Location</label>
          <textarea id="input-descr" value={experience.descr} onChange={(e)=>updateExperience(experience.company, experience.posTitle, experience.startDate, experience.endDate,experience.location,e.target.value)}/>
        </form>
      ) : (
        <b>{experience.company}</b>
      )}
    </div>

  )
}

export default ListExperienceInput;