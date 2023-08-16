import Avatar from 'components/Avatar';
import { ReactNode } from 'react';
import { Actions, Container, Footer, Question } from './styles';

type Props = {
  user: {
    avatar: string;
    name: string;
  };
  isAnswered?: boolean;
  isHighlighted?: boolean;
  question: string;
  children: ReactNode;
};

const QuestionCard = ({
  user,
  question,
  isAnswered = false,
  isHighlighted = false,
  children,
  ...props
}: Props) => {
  return (
    <Container {...props} isAnswered={isAnswered || false} isHighlighted={isHighlighted || false}>
      <Question>{question}</Question>

      <Footer>
        <Avatar avatar={user.avatar} name={user.name} />

        <Actions>{children}</Actions>
      </Footer>
    </Container>
  );
};

export default QuestionCard;
