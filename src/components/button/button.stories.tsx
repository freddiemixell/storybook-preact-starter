import { h } from 'preact';
import Button, {ButtonProps} from './button';
import { Story, Meta } from '@storybook/preact';
import "tailwindcss/dist/tailwind.min.css";
import "./style.css";

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		children: { name: 'label', control: 'text' },
		textColor: { name: 'text color', control: 'text' },
		backgroundColor: { name: 'background color', control: 'text' },
		rounded: { name: 'rounded', control: 'boolean' },
		onClick: { action: 'clicked', control: 'action' },
	},
	args: {
		children: 'Button label',
	},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
	backgroundColor: 'blue',
	textColor: 'white',
	rounded: false,
};


export const Green = Template.bind({});
Green.args = {
	backgroundColor: 'green',
	rounded: true,
	textColor: 'white',
};