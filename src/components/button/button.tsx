import {ComponentChildren, h, FunctionalComponent} from 'preact';

type ColorList = 'transparent'|'current'|'black'|'white'|'blue'|'green';

export interface ButtonProps {
	children?: ComponentChildren|string;
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
	backgroundColor?: ColorList;
	backgroundOpacity?: 0|25|50|75|100;
	backgroundHoverColor?: ColorList;
	backgroundFocusColor?: ColorList;
	textColor?: ColorList;
	rounded?: boolean;
	bold?: boolean;
}

const Button: FunctionalComponent<ButtonProps> = ({children, onClick = () => {}, className = '', disabled = false, textColor = 'white', rounded = true, bold = true, backgroundColor, backgroundOpacity, backgroundHoverColor, backgroundFocusColor }) => {
	let classes = () => {
		let classList = [
			'button',
			'py-2',
			'px-4',
			className
		];

		// Add background color
		if (backgroundColor && backgroundColor !== 'transparent' && backgroundColor !== 'white' && backgroundColor !== 'black' && backgroundColor !== 'current' ) {
			classList.push(`bg-${backgroundColor}-500`);
		} else {
			classList.push(`bg-${backgroundColor}`);
		}

		// Text Color.
		if (textColor && textColor !== 'transparent' && textColor !== 'white' && textColor !== 'black' && textColor !== 'current') {
			classList.push(`text-${textColor}-500`);
		} else {
			classList.push(`text-${textColor}`)
		}

		// Is Rounded.
		if (rounded) {
			classList.push('rounded');
		}

		// Is Bold.
		if (bold) {
			classList.push('font-bold');
		}

		return classList.join(' ');
	}
	return (
		<button
			className={classes()}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

export default Button;