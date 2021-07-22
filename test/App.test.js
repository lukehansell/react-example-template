import App from '../src/App'
import TodoList from '../src/components/TodoList'
import AddTodoForm from '../src/components/AddTodoForm'
import { shallow } from 'enzyme'

describe('<App />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders a TodoList with the default empty array of todos', () => {
    expect(wrapper).to.containMatchingElement(<TodoList todos={[]} />)
  })

  it('renders an AddTodoForm', () => {
    expect(wrapper).to.containMatchingElement(<AddTodoForm />)
  })

  describe('when onTodoAdded from AddTodoForm is called', () => {
    beforeEach(() => {
      wrapper.find(AddTodoForm).prop('onTodoAdded')('foobar')
    })

    it('adds a todo to the TodoList', () => {
      expect(wrapper.find(TodoList).prop('todos')).to.deep.equal([{
        id: 0,
        text: 'foobar',
        isComplete: false
      }])
    })

    describe('when it is called again', () => {
      beforeEach(() => {
        wrapper.find(AddTodoForm).prop('onTodoAdded')('foobar')
        wrapper.find(AddTodoForm).prop('onTodoAdded')('foobar')
        wrapper.find(AddTodoForm).prop('onTodoAdded')('foobar')
        wrapper.find(AddTodoForm).prop('onTodoAdded')('foobar')
      })

      it('auto increments the id', () => {
        expect(wrapper.find(TodoList).prop('todos').map(({ id }) => id)).to.deep.equal([
          0, 1, 2, 3, 4
        ])
      })
    })
  })

  describe('when onTodoClick from TodoList is called', () => {
    beforeEach(() => {
      wrapper.find(AddTodoForm).prop('onTodoAdded')('foo')
      wrapper.find(AddTodoForm).prop('onTodoAdded')('bar')
      wrapper.find(TodoList).prop('onTodoClick')(1)
    })

    it('toggles the complete status of the associated todo item', () => {
      console.log(wrapper.find(TodoList).prop('todos'))
      expect(wrapper.find(TodoList).prop('todos').map(({ isComplete }) => isComplete)).to.deep.equal([
        false, true
      ])
    })
  })
})