import toast from 'react-hot-toast';
import { database } from 'utils/services/firebase';
import { useAuth } from './useAuth';

type NewRoomProps = {
  createNewRoom: (name: string) => Promise<string | null | undefined>;
};

export const useNewRoom = (): NewRoomProps => {
  const { user } = useAuth();

  const createNewRoom = async (name: string) => {
    if (name.trim() === '') {
      toast.error('O nome da sala introduzido é inválido!', {
        duration: 5000,
      });
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: name,
      authorId: user?.id,
      // code: generateCode()
    });

    return firebaseRoom.key;
  };

  return { createNewRoom };
};
