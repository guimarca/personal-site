import DevIcon from '../utils/devIcon'

export function DevProjectsSection({ title, projects }) {
  const showLinkItems = (items) => {
    return items.map((item, index) => 
      <span className="mr-3" key={index}>
        {
          item.url ?
            <a href={ item.url }>
              { item.title }
            </a>
            : item.title
        }
      </span>
    )
  }

  const showTechItems = (items) => {
    return items.map((item, index) => 
      <span className="mr-2" key={index} style={{ display: "inline-block" }}>
        <DevIcon icon={ item }/> { item } { index < items.length - 1 && "\\" }
      </span>
    )
  }

  return (
    projects && projects.length > 0 && <section className="section research-contents">
      <h2 className="subtitle">
        { title }
      </h2>
      {
        projects.map((project, index) => {
          return (
            <div className="box" key={index}>
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <strong>{ project.title }</strong>
                    <p>
                      { project.description }
                    </p>

                    <DevProjectLinksRow items={ project.tech_stack } showItems={showTechItems}/>
                    <DevProjectLinksRow title="Links" items={ project.items } showItems={showLinkItems}/>

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

export function DevProjectLinksRow({ title, items, showItems }) {
  return (
    items && items.length > 0 ?
      <div className="is-mobile mb-1">
        <div className="is-size-6">
          { title && <span className="mr-3"><strong>{ title }</strong></span> }
          { showItems(items) }                          
        </div>
      </div>
    : <></>
  )
}