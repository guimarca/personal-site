import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import contact from '../data/contact.json'
import description from '../data/description.json'

export default function Home() {
  return (
    <>
      <div className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src={ `${description.img}` } data-uk-img="">
        
        <h1 className="uk-heading-medium">Guillem Martínez-Cànovas</h1>

        <h2 className="uk-text-lead">
          { description.jobTitle }
        </h2>
      </div>

      <div className="uk-heading-medium uk-text-center">
        <a href={ contact.profiles.linkedin.link }>
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
      </div>

      <div className="uk-text-default uk-text-center" dangerouslySetInnerHTML={{ __html: description.text.join("<br/>") }}></div>
    </>
  )
}
