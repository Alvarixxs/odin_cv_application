import '../fillout.css'

function PersonalDetailsInput({isActive, setActive, userFullName, setFullName, email, setEmail, tel, setTel, address, setAddress}) {
  return (
  <section className="personal-details" onClick={isActive ? null: setActive}>
    <h1 className="title">Personal Details</h1>
    {isActive ? (
      <form>
        <label htmlFor="input-name">Full name</label>
        <input type="text" id="input-name" value={userFullName} onChange={(e)=>setFullName(e.target.value)}/>
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