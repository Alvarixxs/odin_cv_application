import '../fillout.css'
import Icon from '@mdi/react';
import {mdiAccount, mdiBriefcase, mdiChevronLeft} from '@mdi/js';

function PersonalDetailsInput({isActive, setActive, toggleHide, userFullName, setFullName, email, setEmail, tel, setTel, address, setAddress}) {
  return (
  <section className="section-input">
    <div className="header-input hoverable" onClick={isActive ? toggleHide: setActive}>
      <div className="title-input">
        <Icon path={mdiAccount} size={1}/>
        <p>Personal Details</p>
      </div>
      <div className="icon">
        <Icon path={mdiChevronLeft} size={1}/>
      </div>
    </div>
    {isActive ? (
      <form>
        <label htmlFor="input-name">Full name</label>
        <input type="text" id="input-name" value={userFullName} onChange={(e) => setFullName(e.target.value)}/>
        <label htmlFor="input-email">Email</label>
        <input type="email" id="input-email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="input-phone">Phone</label>
        <input id="input-phone" type="tel" value={tel} onChange={(e)=>setTel(e.target.value)}/>
        <label htmlFor="input-address">Address</label>
        <input type="text" id="input-address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
      </form>
    ) : null}
  </section>
  )
}

export default PersonalDetailsInput;