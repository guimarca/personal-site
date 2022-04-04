import { LinksRow, TechItems } from '../utils/generic'
import positions from '../data/positions.json'

export default function Positions() {
  return (
    <div className="">
      <h1 className="uk-heading-medium">
        positions
      </h1>

      <section className="section positions-contents">
      {
        positions.map((position, index) => {
          return (
            <div className="box" key={index}>
              <article className="media">
                <figure className="media-left has-text-center is-hidden-mobile">
                  <img src={ position.site.img } alt={ position.site.name } width="100"></img>
                </figure>

                <div className="media-content">
                  <div className="content">
                    <h5 className="is-5 has-text-weight-bold">{ position.title }</h5>
                    
                    <h6><a href={ position.site.link }>{ position.site.name }</a></h6>

                    <figure className="media-left has-text-center is-hidden-tablet">
                      <img src={ position.site.img } alt={ position.site.name } width="100"></img>
                    </figure>

                    <div className="is-size-6 mb-3">
                      { position.date.from } - { position.date.to }
                    </div>
                    
                    <span className="is-size-6">{ position.description }</span>
                    
                    <div className="is-size-7 mt-5">
                      <LinksRow items={ position.techStack } showItems={TechItems}/>
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
