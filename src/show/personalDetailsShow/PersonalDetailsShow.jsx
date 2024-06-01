import '../show.css'

function PersonalDetailsShow({userFullName, email, tel, address}) {
  return (
    <section>
      <h1>{userFullName}</h1>
      <div>
        <p>{email}</p>
        <p>{tel}</p>
        <p>{address}</p>
      </div>
    </section>
  )
}

export default PersonalDetailsShow