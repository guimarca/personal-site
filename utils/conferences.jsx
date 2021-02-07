export function ConferencesSection({ data }) {
  return (
    data && data.length > 0 && <section className="section research-contents">
        <h2 className="subtitle">
          conferences
        </h2>
        {
        data.map((conf, index) => {
          return (
            <div className="box" key={index}>
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <strong>{ conf.title }</strong>
                    <br/>
                    { conf.month }, { conf.year } - { conf.location }
                    <br/>
                    <i>{ conf.role }</i>
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