import Button from 'components/Button';
import { FaGoogle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useAuth } from 'utils/hooks/useAuth';
import { Container, Divider, EnterForm, Logo, RoomButton } from './styles';

const Home = () => {
	const { user, signInWithGoogle } = useAuth();
	const history = useHistory();

	const handleCreateRoom = async () => {
		if (!user) {
			await signInWithGoogle();
		}

		// Redirect after Sign In
		history.push('/rooms/new');
	};

	return (
		<Container>
			<Logo />

			<RoomButton onClick={handleCreateRoom}>
				<FaGoogle />
				Crie sua sala com o Google
			</RoomButton>

			<Divider>ou entre em uma sala</Divider>

			<EnterForm>
				<input type='text' placeholder='Digite o código da sala' />
				<Button type='submit' icon={<FiLogIn />}>
					Entrar na sala
				</Button>
			</EnterForm>
		</Container>
	);
};

export default Home;
