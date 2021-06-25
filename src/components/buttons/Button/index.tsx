import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
	icon?: ReactNode;
	modifier?: 'outline';
};

const Button = ({ children, icon, modifier, ...props }: Props) => {
	return (
		<ButtonContainer
			modifier={modifier}
			haveIcon={icon !== undefined}
			{...props}
		>
			{icon && icon}

			{children}
		</ButtonContainer>
	);
};

export default Button;
