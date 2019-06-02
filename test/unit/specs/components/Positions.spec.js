import Vue from 'vue'
import Positions from '@/components/Positions'

describe('Positions.vue', () => {
  it('should render section elementss', () => {
    const Constructor = Vue.extend(Positions)
    const vm = new Constructor().$mount()
    
    expect(vm.$el.querySelector('#positions h2.section-title').textContent)
      .toBeTruthy()
    
    expect(vm.$el.querySelectorAll('#positions .positions-entry').length)
      .toBeGreaterThan(0)
  })
})
