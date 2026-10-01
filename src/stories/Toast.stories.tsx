import { useState } from 'react'
import type { ComponentProps } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, Toast } from '../components'

const meta = {
  title: 'Fieldwork UI/Components/Toast',
  component: Toast,
  args: {
    title: 'Changes saved',
    message: 'Your workspace is up to date.',
    onDismiss: () => undefined,
  },
  render: (args) => <DismissibleToast {...args} />,
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {}

function DismissibleToast(args: ComponentProps<typeof Toast>) {
  const [visible, setVisible] = useState(true)
  return visible ? (
    <Toast {...args} onDismiss={() => setVisible(false)} />
  ) : (
    <Button variant="outline" onClick={() => setVisible(true)}>
      Show notification
    </Button>
  )
}
