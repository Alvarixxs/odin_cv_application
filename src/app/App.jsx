import { useState } from 'react'
import './App.css'
import CVdata from "../fillout/cVdata/CVdata.jsx";
import Preview from "../show/preview/preview.jsx";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [userFullName, setFullName] = useState('name and surname')
  const [email, setEmail] = useState('email@example.com')
  const [tel, setTel] = useState('111 111 111')
  const [address, setAddress] = useState('Address, Address')

  const [educations, setEducations] = useState([{key: uuidv4(), school: 'school', degree: 'degree', startDate: 'startDate', endDate: 'endDate', location: 'location'}])

  const [experiences, setExperiences] = useState([{key: uuidv4(), company: 'company', posTitle: 'position title', startDate: 'startDate', endDate: 'endDate', location: 'location', descr: 'description'}])

  function addEducation(school, degree, startDate, endDate, location) {
    let newEducations = [...educations]
    newEducations.push({
      key: uuidv4,
      school: school,
      degree: degree,
      startDate: startDate,
      endDate: endDate,
      location: location,
    })
    setEducations(newEducations)
  }

  function updateEducation(education, school, degree, startDate, endDate, location) {
    let newEducations = [...educations]
    let index = newEducations.indexOf(education)
    newEducations[index].school = school
    newEducations[index].degree = degree
    newEducations[index].startDate = startDate
    newEducations[index].endDate = endDate
    newEducations[index].location = location
    setEducations(newEducations)
  }

  function addExperience(company, posTitle, startDate, endDate, location, descr) {
    let newExperiences = [...experiences]
    newExperiences.push({
      key: uuidv4(),
      company: company,
      posTitle: posTitle,
      startDate: startDate,
      endDate: endDate,
      location: location,
      descr: descr,
    })
    setExperiences(newExperiences)
  }

  function updateExperience(experience, company, posTitle, startDate, endDate, location, descr) {
    let newExperiences = [...experiences]
    let index = newExperiences.indexOf(experience)
    newExperiences[index].company = company
    newExperiences[index].posTitle = posTitle
    newExperiences[index].startDate = startDate
    newExperiences[index].endDate = endDate
    newExperiences[index].location = location
    newExperiences[index].descr = descr
    setExperiences(newExperiences)
  }

  return (
    <>
      <CVdata
        userFullName={userFullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        tel={tel}
        setTel={setTel}
        address={address}
        setAddress={setAddress}
        educations={educations}
        addEducation={addEducation}
        updateEducation={updateEducation}
        experiences={experiences}
        addExperience={addExperience}
        updateExperience={updateExperience}
      ></CVdata>
      <Preview
        userFullName={userFullName}
        email={email}
        tel={tel}
        address={address}
        educations={educations}
        experiences={experiences}
        >
      </Preview>
    </>
  )
}

export default App