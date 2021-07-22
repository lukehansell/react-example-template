import TodoItem from '../../src/components/TodoItem'

import { shallow } from 'enzyme'
import sinon from 'sinon'

describe('<TodoItem />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<TodoItem text="some item" />)
  })

  it('renders an li element', () => {
    expect(wrapper).to.have.tagName('li')
  })

  it('renders the provided text', () => {
    expect(wrapper.find('li')).to.have.text('some item')
  })

  context('when item is complete', () => {
    beforeEach(() => {
      wrapper = shallow(<TodoItem text="some text" isComplete={true} />)
    })

    it('adds the complete class', () => {
      expect(wrapper).to.have.className('complete')
    })
  })

  context('when item is not complete', () => {
    beforeEach(() => {
      wrapper = shallow(<TodoItem text="some item" />)
    })

    it('does not have the complete class', () => {
      expect(wrapper).not.to.have.className('complete')
    })
  })

  describe('when clicked', () => {
    let handleClickStub

    beforeEach(() => {
      handleClickStub = sinon.stub()
      wrapper = shallow(<TodoItem text="some item" onTodoClick={handleClickStub} id={1} />)
      wrapper.simulate('click')
    })

    it('calls the onClick handler with the id', () => {
      expect(handleClickStub).to.have.been.calledWith(1)
    })
  })
})