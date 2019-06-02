const TECHNOLOGIES = [ 'python', 'git', 'django', 'jenkins', 'docker', 'kubernetes', 'php', 'java',
  'c++', 'c', 'angular', 'mysql', 'postgresql', 'linux', 'android', 'yii2', 'gitlab', 'javascript' ]

export default {
  props: [ 'text' ],
  methods: {
    devIcons: (text) => {
      const words = text.split(' ').map(addDevIcon)
      return words.join(' ')
    }
  }
}

function addDevIcon (word) {
  let technology = word.replace(/[,.:()!¡?]/g, '')
  let techSlug = technology.toLowerCase()
  const techIndex = TECHNOLOGIES.indexOf(techSlug)
  if (techIndex === -1) {
    return word
  }

  const techWithIcon = `<i class="tech-icon devicon-${translateSpecialCases(techSlug)}-plain"></i> ` + technology
  return word.replace(technology, techWithIcon)
}

function translateSpecialCases (tech) {
  switch (tech) {
    case 'c++':
      return 'cplusplus'
    case 'angular':
      return 'angularjs'
    case 'yii2':
      return 'yii'
    default:
      return tech
  }
}
