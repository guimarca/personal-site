import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import contact from '../data/contact.json'
import description from '../data/description.json'

export default function Home() {
  return (
    <div className="home">
      <h1 className="uk-heading-small">Guillem Martínez-Cànovas</h1>

      <img className="uk-border-circle home-img" src={description.img} alt="GMC"></img>

      <h2 className="uk-margin-remove-bottom">{description.jobTitle}</h2>

      <div className="sn-icon">
        <a href={ contact.profiles.linkedin.link }>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      <div className="mt-6" dangerouslySetInnerHTML={{ __html: description.text.join("<br/>") }}></div>
    </div>
  )
}
