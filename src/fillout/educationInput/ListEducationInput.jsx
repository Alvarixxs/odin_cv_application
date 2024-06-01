
function ListEducationInput({activeIndex, setActiveIndex, educations, updateEducation}) {
  return (
    <div>
      {educations.map((education, i)=>
          <SingleEducationInput
            key={education.key}
            isActive={activeIndex === i}
            setActive={()=>setActiveIndex(i)}
            education={education}
            updateEducation={(school, degree, startDate, endDate, location) => updateEducation(education, school, degree, startDate, endDate, location)}
          ></SingleEducationInput>
      )}
    </div>
  )
}

function SingleEducationInput({isActive, setActive, education, updateEducation}) {
  return (
    <div>
      {isActive ? (
        <form>
          <label htmlFor="input-school">School</label>
          <input type="text" id="input-school" value={education.school}
                 onChange={(e) => updateEducation(e.target.value, education.degree, education.startDate, education.endDate, education.location)}/>
          <label htmlFor="input-degree">Degree</label>
          <input type="text" id="input-degree" value={education.degree}
                 onChange={(e) => updateEducation(education.school, e.target.value, education.startDate, education.endDate, education.location)}/>
          <label htmlFor="input-startDate">Start date</label>
          <input id="input-startDate" type="text" value={education.startDate}
                 onChange={(e) => updateEducation(education.school, education.degree, e.target.value, education.endDate, education.location)}/>
          <label htmlFor="input-endDate">End date</label>
          <input type="text" id="input-endDate" value={education.endDate}
                 onChange={(e) => updateEducation(education.school, education.degree, education.startDate, e.target.value, education.location)}/>
          <label htmlFor="input-location">Location</label>
          <input type="text" id="input-location" value={education.location}
                 onChange={(e) => updateEducation(education.school, education.degree, education.startDate, education.endDate, e.target.value)}/>
        </form>
      ) : (
        <button onClick={setActive}>{education.school}</button>
      )
      }
    </div>
  )
}

export default ListEducationInput