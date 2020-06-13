import education from '../data/education.json'
import ReactMarkdown from 'react-markdown'

export default function Education() {
  return (
    <div className="">
      <section className="section education-header">
        <h1 className="title">
          education
        </h1>
      </section>

      <section className="section education-contents">
      {
        education.map((certification, index) => {
          return (
            <div className="box" key={index}>
              <article className="media">
                <figure className="media-left has-text-right">
                  <p><strong>{ certification.year }</strong></p>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <span className="is-size-6">
                      <a href={ certification.titulation.link }>{ certification.titulation.name }</a>
                      &nbsp;at&nbsp;
                      <a href={ certification.university.link }>{ certification.university.name }</a>
                      </span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          )
        })
      }
      </section>
    </div>
  ) 
}
