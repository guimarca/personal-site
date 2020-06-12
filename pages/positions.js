import positions from '../data/positions.json'
import ReactMarkdown from 'react-markdown'

export default function Positions() {
  return (
    <div className="">
      <section className="section positions-header">
        <h1 className="title">
          positions
        </h1>
      </section>

      <section className="section positions-contents">
      {
        positions.map((position, index) => {
          return (
            <div className="box" key={index}>
              <article className="media">
                <figure className="media-left has-text-right">
                  { position.date.to }
                  <br/>&uarr;<br/>
                  { position.date.from }
                </figure>
                <div className="media-content">
                  <div className="content">
                    <span className="is-size-6 has-text-weight-bold"><ReactMarkdown source={ position.title }/></span>
                    <span className="is-size-6"><ReactMarkdown source={ position.description }/></span>
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
