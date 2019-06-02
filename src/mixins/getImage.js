export default {
  props: [ 'img' ],
  methods: {
    getImage: (img) => {
      return require('../assets/' + img)
    }
  }
}
