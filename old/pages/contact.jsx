import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

import contact from '../data/contact.json'

export default function Contact() {
  return (
    <div className="has-text-centered">
      <section className="section home-header">
        <h1 className="title mt-6" dangerouslySetInnerHTML={{ __html: contact.email }}></h1>
        
        <div className="is-size-2">
          <a href={ contact.profiles.linkedin.link } className="mr-3">
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          
          <a href={ contact.profiles.stackoverflow.link }>
            <FontAwesomeIcon icon={faStackOverflow}/>
          </a>
        </div>

        
      </section>

    </div>
  )
}
