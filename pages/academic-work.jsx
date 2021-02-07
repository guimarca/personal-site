import publications from '../data/publications.json'
import otherPublications from '../data/otherPublications.json'
import teaching from '../data/teaching.json'
import conferences from '../data/conferences.json'
import journalRefereeing from '../data/journalRefereeing.json'

import { ArticleSection } from '../utils/article'
import { TeachingSection } from '../utils/teaching'
import { ConferencesSection } from '../utils/conferences'

export default function AcademicWork() {
  return (
    <div className="">
      <section className="section academic-work-header">
        <h1 className="title">
          academic work
        </h1>
      </section>

      <ArticleSection title="publications" articles={ publications }/>

      <ArticleSection title="other publications" articles={ otherPublications }/>

      <TeachingSection data={ teaching }/>

      <ConferencesSection data={ conferences }/>

      <section className="section journal-refeering-contents">
        <h2 className="subtitle">
          journal refeering
        </h2>
        <div className="box">
          <article className="media">
            <ul>
            {
              journalRefereeing.map((journal, index) => {
                return <li key={ index }>&rarr; { journal }</li>
              })
            }
            </ul>
          </article>
        </div>
      </section>
    </div>
  ) 
}
