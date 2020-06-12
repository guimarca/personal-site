import devProjects from '../data/devProjects.json'

import { DevProjectsSection } from '../utils/devProject'

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
          <DevProjectsSection title={ workplace.title } projects={ workplace.projects } key={ index }/> 
        )
      }

    </div>
  ) 
}
