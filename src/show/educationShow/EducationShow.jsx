
function ListEducationShow({educations}) {
  return (
    <div>
      {educations.map((education)=><SingleEducationShow key={education.key} education={education}></SingleEducationShow>)}
    </div>
  )
}

function SingleEducationShow({education}) {
  return (
    <div>
      <p>{education.startDate+'-'+education.endDate}</p>
      <p>{education.location}</p>
      <p>{education.school}</p>
      <p>{education.degree}</p>
    </div>
  )
}

export default ListEducationShow