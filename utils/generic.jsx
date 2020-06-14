import DevIcon from './devIcon'

export function LinksRow({ title, items, showItems, size, separator, onlyIcons }) {
    let isSize = size ? size : '7'
    let mb = '1'
    if (onlyIcons) {
        isSize = '5'
        mb = '3'
    }
    return (
        items && items.length > 0 ?
        <div className={`is-mobile mb-${mb}`}>
            <div className={ `is-size-${isSize}` }>
            { title && <span className="mr-3"><strong>{ title }</strong></span> }
            { showItems(items, separator, onlyIcons) }                          
            </div>
        </div>
        : <></>
    )
}

export const LinkItems = (items) => {
    return items.map((item, index) => 
        <span className="mr-3" key={index}>
        {
            item.url ?
            <a href={ item.url }>
                <DevIcon icon={ item.title }/> { item.title }
            </a>
            : <><DevIcon icon={ item.title }/> { item.title }</>
        }
        </span>
    )
}

export const TechItems = (items, separator, onlyIcons) => {
    return items.map((item, index) => 
      <span className="mr-2" key={index} style={{ display: "inline-block" }}>
        {
            onlyIcons ? 
            <span data-tooltip={ item } className="mr-3"><DevIcon icon={ item }/></span>
            : <><DevIcon icon={ item }/> { item }</>
        }
        { index < items.length - 1 ? separator : "" }
      </span>
    )
}