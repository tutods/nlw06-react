import { RoomContext, RoomContextProps } from 'contexts/RoomContext';
import { useContext } from 'react';

export const useRoom = (): RoomContextProps => {
	const context = useContext(RoomContext);

	return context;
};
