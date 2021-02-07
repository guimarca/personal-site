export function TeachingSection({ data }) {
  return (
    data && data.length > 0 && <section className="section research-contents">
        <h2 className="subtitle">
          teaching
        </h2>
        {
        data.map((teach, index) => {
          return (
            <div className="box" key={index}>
              <article className="media">
                <figure className="media-left has-text-right">
                  <p><strong>{ teach.period.start } - { teach.period.end }</strong></p>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <p>
                    <a href={teach.course.link}>{ teach.course.name }</a>,&nbsp;
                    <a href={teach.degree.link}>{ teach.degree.name }</a>,&nbsp;
                    <a href={teach.university.link}>{ teach.university.name }</a>
                    </p>
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