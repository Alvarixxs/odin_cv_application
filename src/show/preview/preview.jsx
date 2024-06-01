import PersonalDetailsShow from "../personalDetailsShow/PersonalDetailsShow.jsx";
import ListEducationShow from "../educationShow/EducationShow.jsx";
import ListExperienceShow from "../experienceShow/ExperienceShow.jsx";
import '../show.css'

function Preview({userFullName, email, tel, address, educations, experiences}) {
  return (
    <section className="preview">
      <PersonalDetailsShow
        userFullName={userFullName}
        email={email}
        tel={tel}
        address={address}
        >
      </PersonalDetailsShow>
      <ListEducationShow
        educations={educations}
        >
      </ListEducationShow>
      <ListExperienceShow
        experiences={experiences}
        >
      </ListExperienceShow>
    </section>
  )
}

export default Preview