import devicons from 'devicon/devicon.json'

const mappings = [
    {
        icon: "apple",
        exact: ["ios"]
    },
    {
        icon: "amazonwebservices",
        exact: ["aws", "eks"]
    },
    {
        icon: "python",
        exact: ["celery"]
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
        icon: "windows8",
        exact: ["azure"]
    },
    {
        icon: "google",
        has: ["google"]
    },
    {
        icon: "confluence",
        has: ["atlassian"]
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
]

export default function DevIcon({ icon }) {
    const getIconID = (icon) => {
        const name = icon.trim().toLowerCase()

        for (const mapping of mappings) {
            if (mapping.exact && mapping.exact.find(el => el === name)) {
                return mapping.icon
            }

            if (mapping.has && mapping.has.find(el => name.includes(el))) {
                return mapping.icon
            }
        }
        return name
    }

    const iconExists = (name) => {
        return devicons.find((icon) => icon.name === name)
    }

    const iconId = getIconID(icon)
    return (
        !iconExists(iconId) ? <></> :
        <i className={ `devicon-${ iconId }-plain` }></i>
    )
}