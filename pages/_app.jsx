import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { config } from '@fortawesome/fontawesome-svg-core'
import * as styles from '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import routes from '../utils/routes'

import 'bulma/css/bulma.css'
import '@creativebulma/bulma-tooltip/dist/bulma-tooltip.min.css'
// import 'devicon/devicon.css'  <-- from cdn in head
import '../styles/custom.css'

function App({ Component, pageProps }) {
    const router = useRouter()

    const handleHamburgerClick = (forceHide=false) => {
        if (!process.browser) {
            return
        }
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
          
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach( el => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
      
            if (forceHide) {
                el.classList.remove('is-active');
                $target.classList.remove('is-active');
            }
            else {
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            }
          })
        }
    }

    return <>
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

        <section className="hero is-warning is-fullheight is-bold">

            <div className="hero-head">
                <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <span className="navbar-burger burger" data-target="navbarMenuHeroA" onClick={ () => handleHamburgerClick() }>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                        {
                            routes.map((route, index) => {
                                let linkClass = "navbar-item"
                                if  (router.pathname === route.path) {
                                    linkClass = linkClass + " is-active"
                                }
                                return (
                                    <Link
                                        href={route.path}
                                        key={index}
                                        className={linkClass}
                                        onClick={ () => handleHamburgerClick(true) }>
                                        {route.title}
                                    </Link>
                                );
                            })
                        }
                    </div>
                    </div>
                </div>
                </nav>
            </div>
            
            <div className="hero-body">
                <div className="container">
                    <Component {...pageProps} />
                </div>
            </div>
        </section>
    </>;
}

export default App