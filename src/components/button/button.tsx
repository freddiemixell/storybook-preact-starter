import {ComponentChildren, h, FunctionalComponent} from 'preact';

export interface ButtonProps {
	children: ComponentChildren|string|null;
	onClick: () => void;
	className?: string;
	disabled?: boolean;
}

const Button: FunctionalComponent<ButtonProps> = ({children, onClick, className, disabled}) => (
	<button
		className={`button text-white font-bold py-2 px-4 rounded ${className}`}
		onClick={onClick}
		disabled={disabled}
	>
		{children}
	</button>
);

export default Button;