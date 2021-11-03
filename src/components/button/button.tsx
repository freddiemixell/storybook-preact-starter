import {ComponentChildren, h} from 'preact';
import { useClasses } from '../../hooks/useclasses';

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

export const Button = ({
	children,
	onClick = () => {},
	className = '',
	disabled = false,
	textColor = 'white',
	rounded = true,
	bold = true,
	backgroundColor,
	backgroundOpacity,
	backgroundHoverColor, 
	backgroundFocusColor
}: ButtonProps) => {
	let classes = useClasses({
		backgroundColor,
		backgroundHoverColor,
		backgroundFocusColor,
		bold,
		rounded,
		textColor,
		className,
		backgroundOpacity
	});
	return (
		<button
			className={classes()}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};