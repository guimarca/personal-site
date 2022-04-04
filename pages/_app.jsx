import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { config } from '@fortawesome/fontawesome-svg-core'
import * as styles from '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import routes from '../utils/routes'
import 'uikit/dist/css/uikit.min.css'
// import 'devicon/devicon.css'  <-- from cdn in head
import '../styles/custom.css'

import 'uikit/dist/js/uikit.min.js'; 

function App({ Component, pageProps }) {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>Guillem Martínez-Cànovas</title>

                <meta name="description" content="Fullstack developer and DevOps. Computer and Telecomunications engineer with a PhD in Economics."/>
                <meta name="keywords" content="programming, developer, fullstack developer, devops, python, django, javascript, js, react, reactjs, kubernetes, jenkins, computer science, economics, experimental economics, behavioral economics"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>s
                
                <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="img/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png"/>

                <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"/>
            </Head>
            
            <div>
                <div data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
                    <nav className="uk-navbar-container" data-uk-navbar style={{position: "relative", zIndex: 980}}>
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                                {
                                    routes.map((route, index) => {
                                        let linkClass = ""
                                        if  (router.pathname === route.path) {
                                            linkClass = "uk-active"
                                        }
                                        return (
                                            <li key={index} className={linkClass}>
                                                <Link href={route.path}>{route.title}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

                
            <div className="uk-section uk-section-muted">
                <div className="uk-container">
                    <Component {...pageProps} />
                </div>
            </div>
        </>   
    )
}

export default App