import { IoMdCopy } from 'react-icons/io';
import { ButtonContainer, IconContainer } from './styles';

type Props = {
  code: string;
};

const CodeButton = ({ code, ...props }: Props) => {
  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <ButtonContainer onClick={copyCodeToClipboard} {...props}>
      <IconContainer>
        <IoMdCopy />
      </IconContainer>

      <span>Sala {code}</span>
    </ButtonContainer>
  );
};

export default CodeButton;
