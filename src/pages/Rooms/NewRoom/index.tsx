import Button from 'components/buttons/Button';
import SEO from 'components/SEO';
import AuthLayout from 'layouts/AuthLayout';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useHistory } from 'react-router-dom';
import { useNewRoom } from 'utils/hooks/useNewRoom';
import { BottomParagraph, Container, Logo, MainTitle, NewRoomForm } from './styles';

const NewRoom = () => {
  const { createNewRoom } = useNewRoom();

  const history = useHistory();

  const [roomName, setRoomName] = useState<string>('');

  const handleCreateRoom = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      toast
        .promise(
          createNewRoom(roomName),
          {
            loading: 'A guardar a sua questão...',
            success: (
              <div>
                A sua sala foi <b>criada com sucesso!</b>
              </div>
            ),
            error: <b>Ocorreu um erro ao criar a sala.</b>,
          },
          {
            duration: 5000,
          },
        )
        .then(res => {
          history.push(`/rooms/${res}`);
        });
    } catch (error) {
      toast.error('Ocorreu um erro ao criar a sala desejada. Tente novamente mais tarde.', {
        duration: 5000,
      });
    }
  };

  return (
    <AuthLayout>
      <SEO title={`Criar Nova Sala`} />
      <Container>
        <Logo />

        <MainTitle>Criar uma nova sala</MainTitle>

        <NewRoomForm onSubmit={handleCreateRoom}>
          <input
            type="text"
            placeholder="Nome da sala"
            value={roomName}
            onChange={event => setRoomName(event.target.value)}
          />
          <Button type="submit">Criar sala</Button>
        </NewRoomForm>

        <BottomParagraph>
          Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
        </BottomParagraph>
      </Container>
    </AuthLayout>
  );
};

export default NewRoom;
