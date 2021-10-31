import Icon from '../icon'
import * as renderer from 'react-test-renderer'
import * as React from 'react'
import { mount} from 'enzyme'

describe('icon', () => {
  it('render successfully', () => {
    const json = renderer.create(<Icon name="qq"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('on Click', () => {
    let n = 1;
    const fn = () => {
      n = 2
    }
    const component = mount(<Icon name="wood" onClick={fn} />)
    component.find('svg').simulate('click')
    expect(n).toEqual(2)
  })
  it('on Click', () => {
    const fn = jest.fn()
    const fn2 = jest.fn()

    const component = mount(<Icon name="wood" onClick={fn} />)
    component.find('svg').simulate('click')
    expect(fn).toBeCalled()
  })
})