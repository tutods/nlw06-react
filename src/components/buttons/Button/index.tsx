import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
	icon?: ReactNode;
};

const Button = ({ children, icon, ...props }: Props) => {
	return (
		<ButtonContainer haveIcon={icon !== undefined} {...props}>
			{icon && icon}

			{children}
		</ButtonContainer>
	);
};

export default Button;
