import AddTodoForm from '../../src/components/AddTodoForm'
import { shallow } from 'enzyme'
import sinon from 'sinon'

describe('<AddTodoForm />', () => {
  let wrapper
  let onTodoAddedStub

  beforeEach(() => {
    onTodoAddedStub = sinon.stub()
    wrapper = shallow(<AddTodoForm onTodoAdded={onTodoAddedStub} />)
  })

  it('renders a form', () => {
    expect(wrapper).to.have.tagName('form')
  })

  describe('<form />', () => {
    it('renders an input text area', () => {
      expect(wrapper.find('input')).to.have.length(1)
    })

    it('renders a submit button', () => {
      expect(wrapper.find('button')).to.have.length(1)
    })
  })

  describe('on change of the input', () => {
    beforeEach(() => {
      wrapper.find('input').simulate('change', { target: { value: 'foobar' }})
    })

    it('renders the text', () => {
      expect(wrapper.find('input')).to.have.value('foobar')
    })
  })

  describe('on submission', () => {
    let preventDefaultStub

    beforeEach(() => {
      preventDefaultStub = sinon.stub()
    })

    context('when text is a blank string', () => {
      beforeEach(() => {
        wrapper.find('form').simulate('submit', { preventDefault: preventDefaultStub })
      })

      it('does not call the onTodoAdded callback', () => {
        expect(onTodoAddedStub).not.to.have.been.called
      })

      it('calls prevent default to stop the form from submitting', () => {
        expect(preventDefaultStub).to.have.been.called
      })
    })

    context('when text has content', () => {
      beforeEach(() => {
        wrapper.find('input').simulate('change', { target: { value: 'foobar' } })
        wrapper.find('form').simulate('submit', { preventDefault: preventDefaultStub })
      })

      it('calles onTodoAdd with the text', () => {
        expect(onTodoAddedStub).to.have.been.calledWith('foobar')
      })

      it('calls prevent default to stop the form from submitting', () => {
        expect(preventDefaultStub).to.have.been.called
      })

      it('resets the text to a blank string', () => {
        expect(wrapper.find('input')).to.have.value('')
      })
    })
  })

})