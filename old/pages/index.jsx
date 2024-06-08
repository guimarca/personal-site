import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import contact from '../data/contact.json'
import description from '../data/description.json'

export default function Home() {
  return (
    <div className="has-text-centered">
      <section className="section home-header">
        <figure className="image is-128x128 is-inline-block">
          <img className="is-rounded" src={ description.img }/>
        </figure>
        <h1 className="title mt-3">
          Guillem Martínez-Cànovas
        </h1>
        <h2 className="subtitle">
          { description.jobTitle }
        </h2>

        <div className="is-size-2">
          <a href={ contact.profiles.linkedin.link }>
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </div>

        <div className="mt-6" dangerouslySetInnerHTML={{ __html: description.text.join("<br/>") }}></div>
      </section>

    </div>
  )
}
