import 'jest';
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloDecorator.vue'

describe('HelloWorld.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'Hello aa - +'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg, name: "ami" }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})