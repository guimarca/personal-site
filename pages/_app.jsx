import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { config } from '@fortawesome/fontawesome-svg-core'
import * as styles from '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


config.autoAddCss = false

import routes from '../utils/routes'

import '../node_modules/uikit/dist/js/uikit.min.js'; 
import '../node_modules/uikit/dist/css/uikit.min.css'
import '../styles/custom.css'

function App({ Component, pageProps }) {
    const router = useRouter()

    const createNavbarItem = (route, index) => {
        let liClass = router.pathname === route.path ? "uk-active" : "";
        return (
            <li className={liClass}>
                <Link
                    href={route.path}
                    key={index}>
                        {route.title}
                </Link>
            </li>
        );
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


        <div uk-sticky="offset: 0;" class="uk-margin">
            <div class="uk-visible@m">
                <nav class="uk-navbar-container" data-uk-navbar>
                    <div class="uk-navbar-center">
                        <div class="uk-navbar-center-left">
                            <ul class="uk-navbar-nav">{ routes.slice(0, 3).map(createNavbarItem) }</ul>
                        </div>
                        <a class="uk-navbar-item uk-logo" href="#">G M C</a>
                        <div class="uk-navbar-center-right">
                            <ul class="uk-navbar-nav">{ routes.slice(3, 6).map(createNavbarItem) }</ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="uk-hidden@s">
                <nav class="uk-navbar uk-navbar-container uk-margin" data-uk-navbar>
                    <div class="uk-navbar-left navbar-btn">
                        <a class="uk-navbar-toggle uk-navbar-toggle-animate" uk-navbar-toggle-icon href="#"><FontAwesomeIcon icon={faBars} /></a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                { routes.map(createNavbarItem) }
                            </ul>
                        </div>
                        <a class="uk-navbar-item uk-logo" href="#">G M C</a>
                    </div>
                </nav>
            </div>
        </div>
            
        <div className="uk-container content">
            <Component {...pageProps} />
        </div>
    </>
}

export default App