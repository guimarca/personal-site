import Vue from 'vue'
import Description from '@/components/Description'

describe('Description.vue', () => {
  it('should render section elements', () => {
    const Constructor = Vue.extend(Description)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('#description h1.section-title').textContent)
      .toBeTruthy()
      
    expect(vm.$el.querySelector('#description p.description__text').textContent)
      .toBeTruthy()
  })
})
