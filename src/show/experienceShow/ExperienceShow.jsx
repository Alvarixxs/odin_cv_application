
function ListExperienceShow({experiences}) {
  return (
    <div className="section-show" style={{borderBottom: '1px solid gray'}}>
      <h3 className="title-show">Professional Experience</h3>
      {experiences.map(experience => <SingleExperienceShow key={experience.key}
                                                           experience={experience}></SingleExperienceShow>)}
    </div>
  )
}

function SingleExperienceShow({experience}) {
  return (
    <div className="content-show">
      <p>{experience.startDate + '-' + experience.endDate}</p>
      <b>{experience.company}</b>
      <p>{experience.location}</p>
      <p>{experience.posTitle}</p>
      <p></p>
      <p>{experience.descr}</p>
    </div>
  )
}

export default ListExperienceShow