import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchInput } from '../components'

const meta = {
  title: 'Fieldwork UI/Components/Search Input',
  component: SearchInput,
  args: { placeholder: 'Search the library', 'aria-label': 'Search the library' },
  render: (args) => <SearchInput {...args} style={{ width: 280 }} />,
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
