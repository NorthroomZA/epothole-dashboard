import type { ComponentMeta } from '@storybook/react'

import AssignPotholePage from './AssignPotholePage'

export const generated = () => {
  return <AssignPotholePage />
}

export default {
  title: 'Pages/AssignPotholePage',
  component: AssignPotholePage,
} as ComponentMeta<typeof AssignPotholePage>
