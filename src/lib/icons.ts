const iconsClasses = [
    {
        classes: "devicon-apple-plain",
        exactMatch: ["ios"]
    },
    {
        classes: "devicon-android-plain",
        exactMatch: ["android"]
    },
    {
        classes: "devicon-python-plain",
        exactMatch: ["python", "celery", "asyncio"]
    },
    {
        classes: "devicon-flask-original",
        exactMatch: ["flask"]
    },
    {
        classes: "devicon-fastapi-plain",
        exactMatch: ["fastapi"]
    },
    {
        classes: "devicon-django-plain",
        exactMatch: ["django", "django rest", "otree"]
    },
    {
        classes: "devicon-docker-plain",
        exactMatch: ["docker", "docker swarm", "kubernetes"]
    },
    {
        classes: "devicon-javascript-plain",
        exactMatch: ["javascript", "js"]
    },
    {
        classes: "devicon-typescript-plain",
        exactMatch: ["typescript", "ts"]
    },
    {
        classes: "devicon-nestjs-plain",
        exactMatch: ["nestjs"]
    },
    {
        classes: "devicon-nodejs-plain-wordmark",
        exactMatch: ["node", "nodejs"]
    },
    {
        classes: "devicon-react-original",
        exactMatch: ["react"]
    },
    {
        classes: "devicon-ionic-original",
        exactMatch: ["ionic"]
    },
    {
        classes: "devicon-jquery-plain",
        exactMatch: ["jquery"]
    },
    {
        classes: "devicon-bootstrap-plain",
        exactMatch: ["bootstrap"]
    },
    {
        classes: "devicon-angularjs-plain",
        exactMatch: ["angular", "angularjs"]
    },
    {
        classes: "devicon-yii-plain",
        exactMatch: ["yii2", "yii"]
    },
    {
        classes: "devicon-google-plain",
        contains: ["google"]
    },
    {
        classes: "devicon-php-plain",
        exactMatch: ["php", "prestashop"]
    },
    {
        classes: "devicon-java-plain",
        contains: ["java"]
    },
    {
        classes: "devicon-spring-original",
        contains: ["spring"]
    },
    {
        classes: "devicon-quarkus-plain",
        contains: ["quarkus"]
    },
    {
        classes: "devicon-kotlin-plain",
        exactMatch: ["kotlin"]
    },
    {
        classes: "devicon-redhat-plain",
        contains: ["redhat", "centos"]
    },
    {
        classes: "devicon-gitlab-plain",
        contains: ["gitlab"]
    },
    {
        classes: "devicon-github-plain",
        contains: ["github"]
    },
    {
        classes: "devicon-git-plain",
        exactMatch: ["git"]
    },
    {
        classes: "devicon-debian-plain",
        contains: ["debian"]
    },
    {
        classes: "devicon-ubuntu-plain",
        contains: ["ubuntu"]
    },
    {
        classes: "devicon-linux-plain",
        contains: ["linux"]
    },
    {
        classes: "devicon-firefox-plain",
        contains: ["web", "website", "webapp"]
    },
    {
        classes: "devicon-apachekafka-original",
        exactMatch: ["kafka"]
    },
    {
        classes: "devicon-redis-plain",
        contains: ["redis"]
    },
    {
        classes: "devicon-cassandra-plain",
        contains: ["cassandra"]
    },
    {
        classes: "devicon-mysql-plain",
        contains: ["mysql"]
    },
    {
        classes: "devicon-postgresql-plain",
        contains: ["postgresql"]
    },
    {
        classes: "devicon-elasticsearch-plain",
        contains: ["elasticsearch"]
    },
    {
        classes: "devicon-r-plain",
        exactMatch: ["r"]
    },
    {
        classes: "devicon-circleci-plain",
        exactMatch: ["circleci"]
    },
    {
        classes: "devicon-bash-plain",
        exactMatch: ["bash"]
    },
    {
        classes: "fa-brands fa-aws",
        exactMatch: ["aws", "eks"]
    },
    {
        classes: "fa-brands fa-aws",
        contains: ["jenkins"]
    },
    {
        classes: "fa-brands fa-aws",
        exactMatch: ["azure"]
    },
    {
        classes: "fa-brands fa-atlassian",
        contains: ["atlassian"]
    }
]

export function getIconClasses(name: string): string {
    const keyword = name.toLocaleLowerCase().trim();
    for (const icon of iconsClasses) {
        if (icon.exactMatch && icon.exactMatch.find(el => el === keyword)) {
            return icon.classes;
        }

        if (icon.contains && icon.contains.find(el => keyword.includes(el))) {
            return icon.classes;
        }
    }
    return "";
}

export function getIconText(name: string): string {
    const iconClasses = getIconClasses(name);
    if (!iconClasses) return name;
    return `<i class="${iconClasses}"></i> ${name}`;
}