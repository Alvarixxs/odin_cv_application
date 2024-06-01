import PersonalDetailsShow from "../personalDetailsShow/PersonalDetailsShow.jsx";
import ListEducationShow from "../educationShow/EducationShow.jsx";
import ListExperienceShow from "../experienceShow/ExperienceShow.jsx";

function Preview({userFullName, email, tel, address, educations, experiences}) {
  return (
    <section>
      <PersonalDetailsShow
        userFullName={userFullName}
        email={email}
        tel={tel}
        address={address}
        >
      </PersonalDetailsShow>
      <h1>Education</h1>
      <ListEducationShow
        educations={educations}
        >
      </ListEducationShow>
      <h1>Professional Experience</h1>
      <ListExperienceShow
        experiences={experiences}
        >
      </ListExperienceShow>
    </section>
  )
}

export default Preview