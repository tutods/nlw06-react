import Button from 'components/buttons/Button';
import AuthLayout from 'layouts/AuthLayout';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
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

	console.log(process.env.REACT_APP_API_KEY);

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
			toast.error('O código de sala introduzido é inválido!', {
				duration: 5000
			});
			return;
		}

		// await database
		// 	.ref('rooms')
		// 	.orderByChild('code')
		// 	.equalTo(roomCode)
		// 	.once('value', function (snapshot) {
		// 		if (!snapshot.exists()) {
		// 			toast.error(`O código ${roomCode} é inválido!`);
		// 			return;
		// 		}

		// 		const roomData: VectorRoomType = snapshot.val();

		// 		const room = Object.entries(roomData).map(([key, value]) => {
		// 			return {
		// 				id: key,
		// 				code: value.code
		// 			};
		// 		});
		// 	});

		const roomRef = await database.ref(`rooms/${roomCode}`).get();

		if (!roomRef.exists() || roomRef.val().closedAt) {
			toast.error('O código de sala introduzido é inválido!', {
				duration: 5000
			});
			return;
		}

		history.push(`rooms/${roomCode}`);
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
