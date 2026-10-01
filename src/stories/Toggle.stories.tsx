import { useState } from 'react'
import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toggle } from '../components'

const meta = {
  title: 'Fieldwork UI/Components/Toggle',
  component: Toggle,
  args: { label: 'Weekly digest', checked: true, onChange: () => undefined },
  render: (args) => <InteractiveToggle {...args} />,
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Enabled: Story = {}

export const Disabled: Story = {
  args: { checked: false },
}

function InteractiveToggle(args: ComponentProps<typeof Toggle>) {
  const [checked, setChecked] = useState(args.checked)
  return <Toggle {...args} checked={checked} onChange={setChecked} />
}
