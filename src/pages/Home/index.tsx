import Button from 'components/buttons/Button';
import AuthLayout from 'layouts/AuthLayout';
import { FormEvent, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useAuth } from 'utils/hooks/useAuth';
import { database } from 'utils/services/firebase';
import { Container, Divider, EnterForm, Logo, RoomButton } from './styles';

const Home = () => {
	const { user, signInWithGoogle } = useAuth();
	const [roomCode, setRoomCode] = useState<string>('');
	const history = useHistory();

	const handleCreateRoom = async () => {
		if (!user) {
			await signInWithGoogle();
		}

		// Redirect after Sign In
		history.push('/rooms/new');
	};

	const handleJoinRoom = async (event: FormEvent) => {
		event.preventDefault();

		if (roomCode.trim() === '') {
			return;
		}

		const roomRef = await database.ref(`rooms/${roomCode}`).get();

		if (!roomRef.exists()) {
			alert('Room does not exists.');
			return;
		}

		history.push(`/rooms/${roomCode}`);
	};

	return (
		<AuthLayout>
			<Container>
				<Logo />

				<RoomButton onClick={handleCreateRoom}>
					<FaGoogle />
					Crie sua sala com o Google
				</RoomButton>

				<Divider>ou entre em uma sala</Divider>

				<EnterForm onSubmit={handleJoinRoom}>
					<input
						type='text'
						placeholder='Digite o código da sala'
						onChange={(event) => setRoomCode(event.target.value)}
						value={roomCode}
					/>
					<Button type='submit' icon={<FiLogIn />}>
						Entrar na sala
					</Button>
				</EnterForm>
			</Container>
		</AuthLayout>
	);
};

export default Home;
