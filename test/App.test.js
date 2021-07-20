import App from '../src/App'

import { shallow } from 'enzyme'

describe('<App />', () => {
  it('renders hello world in a h1', () => {
    const result = shallow(<App />)
    expect(result.find('h1')).to.have.text('Hello World')
  })
})