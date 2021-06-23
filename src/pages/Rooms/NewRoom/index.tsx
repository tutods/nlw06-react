import Button from 'components/buttons/Button';
import AuthLayout from 'layouts/AuthLayout';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useHistory } from 'react-router-dom';
import { generateCode } from 'utils/functions/generateCode';
import { useAuth } from 'utils/hooks/useAuth';
import { database } from 'utils/services/firebase';
import {
	BottomParagraph,
	Container,
	Logo,
	MainTitle,
	NewRoomForm
} from './styles';

const NewRoom = () => {
	const { user } = useAuth();

	const history = useHistory();

	const [roomName, setRoomName] = useState<string>('');

	const handleCreateRoom = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (roomName.trim() === '') {
			toast.error('O nome da sala introduzido é inválido!', {
				duration: 5000
			});
			return;
		}

		const roomRef = database.ref('rooms');

		const firebaseRoom = await roomRef.push({
			title: roomName,
			authorId: user?.id,
			code: generateCode()
		});

		history.push(`/rooms/${firebaseRoom.key}`);
	};

	return (
		<AuthLayout>
			<Toaster position='top-right' reverseOrder={false} />
			<Container>
				<Logo />

				<MainTitle>Criar uma nova sala</MainTitle>

				<NewRoomForm onSubmit={handleCreateRoom}>
					<input
						type='text'
						placeholder='Nome da sala'
						value={roomName}
						onChange={(event) => setRoomName(event.target.value)}
					/>
					<Button type='submit'>Criar sala</Button>
				</NewRoomForm>

				<BottomParagraph>
					Quer entrar em uma sala já existente?{' '}
					<Link to='/'>Clique aqui</Link>
				</BottomParagraph>
			</Container>
		</AuthLayout>
	);
};

export default NewRoom;
