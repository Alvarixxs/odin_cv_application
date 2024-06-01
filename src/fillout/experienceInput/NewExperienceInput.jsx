import {useState} from "react";

function NewExperienceInput({toggleEdit, addExperience}) {
  const [company, setCompany] = useState('');
  const [posTitle, setPosTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const [descr, setDescr] = useState('');

  function onSave() {
    addExperience(company, posTitle, startDate, endDate, location, descr);
  }

  return (
    <div className="per-input">
      <form>
        <label htmlFor="input-company">School</label>
        <input type="text" id="input-company" value={company} onChange={(e) => setCompany(e.target.value)}/>
        <label htmlFor="input-posTitle">Degree</label>
        <input type="text" id="input-posTitle" value={posTitle} onChange={(e) => setPosTitle(e.target.value)}/>
        <label htmlFor="input-startDate">Start date</label>
        <input id="input-startDate" type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
        <label htmlFor="input-endDate">End date</label>
        <input type="text" id="input-endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
        <label htmlFor="input-location">Location</label>
        <input type="text" id="input-location" value={location} onChange={(e) => setLocation(e.target.value)}/>
        <label htmlFor="input-descr">Description</label>
        <textarea id="input-descr" value={descr} onChange={(e) => setDescr(e.target.value)}/>
        <div className="button-container-input">
          <button type="button" onClick={toggleEdit}>Cancel</button>
          <button type="button" onClick={onSave}>Save</button>
        </div>
      </form>
    </div>

  )
}

export default NewExperienceInput