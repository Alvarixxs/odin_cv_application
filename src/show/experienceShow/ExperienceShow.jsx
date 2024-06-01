
function ListExperienceShow({experiences}) {
  return (
    <div>
      {experiences.map(experience => <SingleExperienceShow key={experience.key} experience={experience}></SingleExperienceShow>)}
    </div>
  )
}

function SingleExperienceShow({experience}) {
  return (
    <div>
      <p>{experience.startDate + '-' + experience.endDate}</p>
      <p>{experience.location}</p>
      <p>{experience.company}</p>
      <p>{experience.posTitle}</p>
      <p>{experience.descr}</p>
    </div>
  )
}

export default ListExperienceShow