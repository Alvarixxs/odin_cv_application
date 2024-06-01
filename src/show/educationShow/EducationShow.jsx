
function ListEducationShow({educations}) {
  return (
    <div className="section-show">
      <h3 className="title-show">Education</h3>
      {educations.map((education) => <SingleEducationShow key={education.key} education={education}></SingleEducationShow>)}
    </div>
  )
}

function SingleEducationShow({education}) {
  return (
    <div className="content-show">
      <p>{education.startDate + '-' + education.endDate}</p>
      <b>{education.school}</b>
      <p>{education.location}</p>
      <p>{education.degree}</p>
    </div>
  )
}

export default ListEducationShow