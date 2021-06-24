import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
};

const IconButton = ({ children, ...props }: Props) => {
	return <Button {...props}>{children}</Button>;
};

export default IconButton;
