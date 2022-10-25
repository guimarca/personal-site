import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'


export function Article({ article }) {
    const authors = () => {
      if (!article.authors || article.authors.length === 0) {
        return
      }

      let authorsString = ''
      if (article.authors.length === 1) {
        authorsString += article.authors[0]
      } else {
        authorsString +=
          article.authors.slice(0, -1).join(', ') +
          ' and ' +
          article.authors.slice(-1)
      }
      return {
        separator: ", with",
        value: authorsString
      }
    }

    const journal = () => {
      if (article.journal) {
        return {
          separator: ".",
          value: <b>{ article.journal }</b>
        }
      }
    }

    const volumeAndPages = () => {
      if (article.volume && article.pages) {
        return {
          separator: ".", 
          value: `${article.volume}, ${article.pages}`
        }
      }
    }

    const year = () => {
      if (article.year) {
        return {
          separator: ".",
          value: `(${article.year})`
        }
      }
    }

    const link = () => {
      if (article.link) {
        return {
          separator: ".",
          value: <a href={article.link}><FontAwesomeIcon icon={faFileAlt}/></a>
        }
      }
    }
    
    const elements = [authors(), journal(), volumeAndPages(), year(), link()].filter(el => !!el)

    return (
        <div className="article">
            <span>"{ article.title }"</span>
            {
              elements.map((element, idx) => {
                return(<span key={idx}>{element.separator}&nbsp;{element.value}</span>)
              })
            }
        </div>
    )
}


export function ArticleSection({ title, articles }) {
  return (
    articles && articles.length > 0 && <section className="section research-contents">
        <h2 className="subtitle">
          { title }
        </h2>
      {
        articles.map((article, index) => {
          return (
            <div className="box" key={index}>
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <Article article={article}/>
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