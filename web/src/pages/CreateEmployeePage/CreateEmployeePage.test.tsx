import { render } from '@redwoodjs/testing/web'

import CreateEmployeePage from './CreateEmployeePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreateEmployeePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateEmployeePage />)
    }).not.toThrow()
  })
})
