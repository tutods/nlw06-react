import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
	modifier?: 'danger';
};

const IconButton = ({ children, modifier, ...props }: Props) => {
	return (
		<Button modifier={modifier} {...props}>
			{children}
		</Button>
	);
};

export default IconButton;
