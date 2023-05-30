import type { ComponentMeta } from '@storybook/react'

import CreateEmployeePage from './CreateEmployeePage'

export const generated = () => {
  return <CreateEmployeePage />
}

export default {
  title: 'Pages/CreateEmployeePage',
  component: CreateEmployeePage,
} as ComponentMeta<typeof CreateEmployeePage>
