import { render } from '@redwoodjs/testing/web'

import AssignPotholePage from './AssignPotholePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AssignPotholePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AssignPotholePage />)
    }).not.toThrow()
  })
})
