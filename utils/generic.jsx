import DevIcon from './devIcon'

export function LinksRow({ title, items, showItems, size, separator }) {
    const sep = separator ? separator : "\\"
    const isSize = size ? size : '7'
    return (
        items && items.length > 0 ?
        <div className="is-mobile mb-1">
            <div className={ `is-size-${isSize}` }>
            { title && <span className="mr-3"><strong>{ title }</strong></span> }
            { showItems(items, sep) }                          
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
                { item.title }
            </a>
            : item.title
        }
        </span>
    )
}

export const TechItems = (items, separator) => {
    return items.map((item, index) => 
      <span className="mr-2" key={index} style={{ display: "inline-block" }}>
        <DevIcon icon={ item }/> { item } { index < items.length - 1 ? separator : "" }
      </span>
    )
}