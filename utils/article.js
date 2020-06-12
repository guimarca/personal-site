import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

export function Article({ article }) {
    const authors = () => {
        if (article.authors.length === 0) {
          return ''
        }
  
        let authorsString = ', with '
        if (article.authors.length === 1) {
          authorsString += article.authors[0]
        } else {
          authorsString +=
            article.authors.slice(0, -1).join(', ') +
            ' and ' +
            article.authors.slice(-1)
        }
        return authorsString
      }

    const journal = () => {
        if (article.journal) {
          return <>. <i>{ article.journal }</i></>
        }
      }

    const volumeAndPages = () => {
        if (article.volume && article.pages) {
          return `. ${article.volume}, ${article.pages}`
        }
      }

    const year = () => {
        if (article.year) {
          return `. (${article.year})`
        }
        return ''
      }

    const link = () => {
        if (article.link) {
          return <a href={article.link}><FontAwesomeIcon icon={faFileAlt}/></a>
        }
        return ''
      }

    return (
        <div className="article">
            <span className="article-title">"{ article.title }"</span>
            { authors() }
            <span className="article-journal">{ journal() }</span>
            { volumeAndPages() } 
            { year() }.&nbsp;
            { link() }
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