import publications from '../data/publications.json'
import otherPublications from '../data/otherPublications.json'
import wp from '../data/workingPapers.json'
import teaching from '../data/teaching.json'

import { ArticleSection } from '../utils/article'
import { TeachingSection } from '../utils/teaching'

export default function AcademicWork() {
  return (
    <div className="">
      <section className="section academic-work-header">
        <h1 className="title">
          academic work
        </h1>
      </section>

      <ArticleSection title="publications" articles={publications}/>
      <ArticleSection title="working papers" articles={wp}/>
      <ArticleSection title="other publications" articles={otherPublications}/>

      <TeachingSection data={ teaching }/>
    </div>
  ) 
}
