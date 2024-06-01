
function ListExperienceInput({experiences}) {
  return (
    <div>
      {experiences.map((experience) => <SingleExperienceInput key={experience.key} experience={experience}></SingleExperienceInput>)}
    </div>
  )
}

function SingleExperienceInput({experience}) {
  return (
    <form>
      <label htmlFor="input-company">School</label>
      <input type="text" id="input-company" value={experience.company} readOnly/>
      <label htmlFor="input-posTitle">Degree</label>
      <input type="text" id="input-posTitle" value={experience.posTitle} readOnly/>
      <label htmlFor="input-startDate">Start date</label>
      <input id="input-startDate" type="text" value={experience.startDate} readOnly/>
      <label htmlFor="input-endDate">End date</label>
      <input type="text" id="input-endDate" value={experience.endDate} readOnly/>
      <label htmlFor="input-location">Location</label>
      <input type="text" id="input-location" value={experience.location} readOnly/>
      <label htmlFor="input-descr">Location</label>
      <textarea id="input-descr" value={experience.descr} readOnly/>
    </form>
  )
}

export default ListExperienceInput;