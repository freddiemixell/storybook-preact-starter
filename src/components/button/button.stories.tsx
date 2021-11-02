import { h } from 'preact';
import Button, {ButtonProps} from './button';
import { action } from "@storybook/addon-actions";
import { Story, Meta } from '@storybook/preact';
import "tailwindcss/dist/tailwind.min.css";
import "./style.css";

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		children: { name: 'label', control: 'text' },
	},
	args: {
		children: 'Button label',
		onClick: action('onClick'),
	},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
	className: 'bg-blue-500 hover:bg-blue-700',
};


export const Green = Template.bind({});
Green.args = {
	className: 'bg-green-500 hover: bg-green-700',
};