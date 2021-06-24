import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonContainer } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
	icon?: ReactNode;
	variant?: 'outline';
};

const Button = ({ children, icon, variant, ...props }: Props) => {
	return (
		<ButtonContainer
			variant={variant}
			haveIcon={icon !== undefined}
			{...props}
		>
			{icon && icon}

			{children}
		</ButtonContainer>
	);
};

export default Button;
