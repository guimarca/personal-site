import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJenkins, faMicrosoft, faAtlassian, faAws } from '@fortawesome/free-brands-svg-icons'


const mappingsDevIcons = {
    library: "devicon",
    icons: [
        {
            icon: "apple",
            exact: ["ios"]
        },
        {
            icon: "python",
            exact: ["celery", "asyncio", "fastapi"]
        },
        {
            icon: "django",
            exact: ["django rest", "otree"]
        },
        {
            icon: "docker",
            exact: ["docker swarm", "kubernetes"]
        },
        {
            icon: "javascript",
            exact: ["js", "ionic"]
        },
        {
            icon: "angularjs",
            exact: ["angular"]
        },
        {
            icon: "yii",
            exact: ["yii2"]
        },
        {
            icon: "google",
            has: ["google"]
        },
        {
            icon: "php",
            exact: ["prestashop"]
        },
        {
            icon: "java",
            exact: ["kotlin"],  
            has: ["spring"]
        },
        {
            icon: "redhat",
            has: ["centos"]
        },
        {
            icon: "gitlab",
            has: ["gitlab"]
        },
        {
            icon: "debian",
            has: ["debian"]
        },
        {
            icon: "ubuntu",
            has: ["ubuntu"]
        },
        {
            icon: "firefox",
            has: ["web", "website", "webapp"]
        }
    ]
}

const mappingsFa = {
    library: "fa",
    icons: [
        {
            icon: faAws,
            exact: ["aws", "eks"]
        },
        {
            icon: faJenkins,
            has: ["jenkins"]
        },
        {
            icon: faMicrosoft,
            exact: ["azure"]
        },
        {
            icon: faAtlassian,
            has: ["atlassian"]
        }
    ]
}

export default function DevIcon({ icon }) {
    const getIconId = (icon) => {
        const name = icon.trim().toLowerCase()

        for (const mapping of [mappingsDevIcons, mappingsFa]) {
            for (const icon of mapping.icons) {
                if (icon.exact && icon.exact.find(el => el === name)) {
                    return {iconId: icon.icon, library: mapping.library }
                }

                if (icon.has && icon.has.find(el => name.includes(el))) {
                    return {iconId: icon.icon, library: mapping.library }
                }
            }
        }
        return {iconId: name, library: mappingsDevIcons.library }
    }

    const { iconId, library } = getIconId(icon)
    return (
        (!library || !iconId) ? <></> :
        (library === "fa") ? <FontAwesomeIcon icon={ iconId } /> :
        <i className={ `devicon-${ iconId }-plain` }></i>
    )
}