import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  modifier?: 'liked';
};

const IconButtonWithNumber = ({ children, modifier, disabled, ...props }: Props) => {
  return (
    <Button modifier={modifier} {...props}>
      {children}
    </Button>
  );
};

export default IconButtonWithNumber;
