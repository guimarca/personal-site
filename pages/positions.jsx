import ReactMarkdown from 'react-markdown'
import { LinksRow, TechItems } from '../utils/generic'
import positions from '../data/positions.json'

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
                    <h5 className="is-5 has-text-weight-bold"><ReactMarkdown source={ position.title }/></h5>
                    <span className="is-size-6"><ReactMarkdown source={ position.description }/></span>
                    <div className="is-size-7 mt-3">
                      <LinksRow items={ position.tech_stack } showItems={TechItems} separator=","/>
                    </div>
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
