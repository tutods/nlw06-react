import Button from 'components/Button';
import { FaGoogle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { auth, firebase } from 'utils/services/firebase';
import { Container, Logo, Divider, EnterForm, RoomButton } from './styles';

const Home = () => {
	const history = useHistory();

	const handleCreateRoom = () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		auth.signInWithPopup(provider).then((res) => {
			console.log(res);

			history.push('/rooms/new');
		});
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
