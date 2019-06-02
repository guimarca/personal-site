import Vue from 'vue'
import Research from '@/components/Research'

describe('Research.vue', () => {
  let Constructor;
  let vm;

  beforeEach(() => {
    Constructor = Vue.extend(Research)
    vm = new Constructor().$mount()
  })

  it('should render section compoenents', () => {
    expect(vm.$el.querySelector('#research h2.section-title').textContent)
      .toBeTruthy()
  })
})
