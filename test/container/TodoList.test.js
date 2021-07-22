import TodoList from '../../src/components/TodoList'
import TodoItem from '../../src/components/TodoItem'

import { shallow } from 'enzyme'
import sinon from 'sinon'

describe('<TodoList />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<TodoList />)
  })

  it('renders an unordered list', () => {
    expect(wrapper).to.have.tagName('ul')
  })

  context('when provided todos', () => {
    const todos = [{
      id: 0,
      text: 'something',
      isComplete: true
    }, {
      id: 1,
      text: 'something else',
      isComplete: false
    }]

    let handleTodoClickStub

    beforeEach(() => {
      handleTodoClickStub = sinon.stub()
      wrapper = shallow(<TodoList todos={todos} onTodoClick={handleTodoClickStub} />)
    })

    it('renders a TodoItem for each todo in todos', () => {
      expect(wrapper.find(TodoItem)).to.have.length(2)
    })

    it('passes the text from the todo to the TodoItem', () => {
      wrapper.find(TodoItem).forEach((todoItem, i) => {
        expect(todoItem).to.have.prop('text', todos[i].text)
      })
    })

    it('passes the id from the todo to the TodoItem', () => {
      wrapper.find(TodoItem).forEach((todoItem, i) => {
        expect(todoItem).to.have.prop('id', todos[i].id)
      })
    })

    it('passes the isComplete value from each todo to the TodoItem', () => {
      wrapper.find(TodoItem).forEach((todoItem, i) => {
        expect(todoItem).to.have.prop('isComplete', todos[i].isComplete)
      })
    })

    it('passes the onTodoClick handler to the TodoItem', () => {
      wrapper.find(TodoItem).forEach((todoItem) => {
        expect(todoItem).to.have.prop('onTodoClick', handleTodoClickStub)
      })
    })
  })

  context('when not provided todos', () => {
    beforeEach(() => {
      wrapper = shallow(<TodoList todos={[]} />)
    })

    it('does not render any TodoItems', () => {
      expect(wrapper.find(TodoItem)).to.have.length(0)
    })
  })
})