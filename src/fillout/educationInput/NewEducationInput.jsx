import {useState} from "react";

function NewEducationInput({toggleEdit, addEducation}) {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');

  function onSave() {
    addEducation(school, degree, startDate, endDate, location);
    toggleEdit();
  }

  return (
    <div className="per-input">
      <form>
        <label htmlFor="input-school">School</label>
        <input type="text" id="input-school" value={school} onChange={(e) => setSchool(e.target.value)}/>
        <label htmlFor="input-degree">Degree</label>
        <input type="text" id="input-degree" value={degree} onChange={(e) => setDegree(e.target.value)}/>
        <label htmlFor="input-startDate">Start date</label>
        <input id="input-startDate" type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
        <label htmlFor="input-endDate">End date</label>
        <input type="text" id="input-endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
        <label htmlFor="input-location">Location</label>
        <input type="text" id="input-location" value={location} onChange={(e) => setLocation(e.target.value)}/>
        <div className="button-container-input">
          <button type="button" onClick={toggleEdit}>Cancel</button>
          <button type="button" onClick={onSave}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default NewEducationInput;