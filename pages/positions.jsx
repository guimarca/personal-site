import { LinksRow, TechItems } from '../utils/generic'
import positions from '../data/positions.json'

export default function Positions() {
  return (
    <div className="">
      <h2 className="uk-heading-small">positions</h2>

      {
        positions.map((position, index) => {
          return (
            <div>
              <div class="uk-card uk-card-default" key={index}>
                <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" data-uk-grid>
                        <div class="uk-width-auto">
                            <img class="uk-border-circle" width="70" height="70" src={position.site.img} alt={ position.site.name }></img>
                        </div>
                        <div class="uk-width-expand">
                            <h4 class="uk-card-title uk-margin-remove-bottom">{position.title}</h4> 
                            <h5 className="uk-margin-remove-top"><a href={ position.site.link }>{ position.site.name }</a></h5>
                            <p class="uk-text-meta uk-margin-remove-top"><time>{ position.date.from } - { position.date.to }</time></p>
                        </div>
                    </div>
                </div>
                <div class="uk-card-body">
                    <p>{ position.description }</p>
                </div>
                <div class="uk-card-footer">
                  <LinksRow items={ position.techStack } showItems={TechItems}/>
                </div>
              </div>
              <br/>  
            </div>        
        )
      }
    )}
    </div>
  )
}
