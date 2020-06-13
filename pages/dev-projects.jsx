import { LinksRow, TechItems, LinkItems } from '../utils/generic'

import devProjects from '../data/devProjects.json'

export default function DevProjects() {
  return (
    <div className="">
      <section className="section research-header">
        <h1 className="title">
          dev-projects
        </h1>

        These are some of the projects I have worked on.
      </section>

      {
        Object.values(devProjects).map((workplace, index) => 
          workplace.projects && workplace.projects.length > 0 && 
          <section className="section research-contents" key={index}>
            <h2 className="subtitle">
              { workplace.title }
            </h2>
            {
              workplace.projects.map((project, index) => {
                return (
                  <div className="box" key={index}>
                    <article className="media">
                      <div className="media-content">
                        <div className="content">
                          <strong>{ project.title }</strong>
                          <p>
                            { project.description }
                          </p>

                          <LinksRow items={ project.tech_stack } showItems={TechItems}/>
                          <LinksRow title="Links" items={ project.items } showItems={LinkItems}/>

                        </div>
                      </div>
                    </article>
                  </div>
                )
              })
            }
          </section>
        )
      }

    </div>
  ) 
}
