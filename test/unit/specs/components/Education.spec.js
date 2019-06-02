import Vue from 'vue'
import Education from '@/components/Education'

describe('Education.vue', () => {
  it('should render section elements', () => {
    const Constructor = Vue.extend(Education)
    const vm = new Constructor().$mount()
    
    expect(vm.$el.querySelector('#education h2.section-title').textContent)
      .toBeTruthy()
    
    expect(vm.$el.querySelectorAll('#education .education-entry').length)
      .toBeGreaterThan(0)
  })
})
