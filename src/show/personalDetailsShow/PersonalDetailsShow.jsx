import '../show.css'
import Icon from '@mdi/react';
import { mdiEmail, mdiPhone, mdiMapMarker} from '@mdi/js';

function PersonalDetailsShow({userFullName, email, tel, address}) {
  return (
    <section className="personal-details-show">
      <h1>{userFullName}</h1>
      <div className="personal-details-show-2">
        <div className="personal-details-div">
          <Icon path={mdiEmail} size={1}/>
          <p>{email}</p>
        </div>
        <div className="personal-details-div">
          <Icon path={mdiPhone} size={1} />
          <p>{tel}</p>
        </div>
        <div className="personal-details-div">
          <Icon path={mdiMapMarker} size={1} />
          <p>{address}</p>
        </div>
      </div>
    </section>
  )
}

export default PersonalDetailsShow