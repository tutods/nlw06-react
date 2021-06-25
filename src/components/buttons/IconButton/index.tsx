import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
	modifier?: 'danger';
	isActive?: boolean;
};

const IconButton = ({ children, modifier, isActive, ...props }: Props) => {
	return (
		<Button modifier={modifier} isActive={isActive} {...props}>
			{children}
		</Button>
	);
};

export default IconButton;
