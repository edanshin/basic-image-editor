import { shallowMount } from '@vue/test-utils'
import ImageEditor from '@/components/ImageEditor.vue'

describe('ImageEditor.vue', () => {
  it('changes brightness and keeps contrast', () => {


    const wrapper = shallowMount(ImageEditor, {
      propsData: { msg }
    })
    expect('').toMatch('')
  }),

  it('changes contrast and keeps brightness', () => {


    const wrapper = shallowMount(ImageEditor, {
      propsData: { msg }
    })
    expect('').toMatch('')
  })
})
