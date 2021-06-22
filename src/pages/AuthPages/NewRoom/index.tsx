import Button from 'components/Button';
import { Link } from 'react-router-dom';
import {
	BottomParagraph,
	Container,
	Logo,
	MainTitle,
	NewRoomForm
} from './styles';

const NewRoom = () => {
	return (
		<Container>
			<Logo />

			<MainTitle>Criar uma nova sala</MainTitle>

			<NewRoomForm>
				<input type='text' placeholder='Nome da sala' />
				<Button type='submit'>Criar sala</Button>
			</NewRoomForm>

			<BottomParagraph>
				Quer entrar em uma sala já existente?{' '}
				<Link to='/'>Clique aqui</Link>
			</BottomParagraph>
		</Container>
	);
};

export default NewRoom;
