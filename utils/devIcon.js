import devicons from 'devicon/devicon.json'

export default function DevIcon({ icon }) {
    const getIconID = (icon) => {
        const name = icon.trim().toLowerCase()
        switch(name) {
            case "ios":
                return "apple"
            case "aws":
            case "eks":
                return "amazonwebservices"
            case "celery":
            case "django rest":
                return "python"
            case "docker swarm":
            case "kubernetes":
                return "docker"
            case "js":
            case "ionic":
                return "javascript"
            case "angular":
                return "angularjs"
            case "yii2":
                return "yii"
            case "google cloud":
                return "google"

            default:
                return name
        }
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