import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { AvatarContainer, Container, Name, UserImage } from './styles';

type Props = {
	avatar: string;
	name: string;
};

const Avatar = ({ avatar, name, ...props }: Props) => {
	const [isLoading, setIsLoading] = useState(true);
	const [haveError, setHaveError] = useState(false);

	return (
		<Container {...props}>
			<AvatarContainer>
				{(isLoading || haveError) && <AiOutlineUser />}

				{(!haveError || !isLoading) && (
					<UserImage
						onLoad={() => setIsLoading(false)}
						onError={() => setHaveError(true)}
						src={avatar}
						alt={name}
					/>
				)}
			</AvatarContainer>

			<Name>{name}</Name>
		</Container>
	);
};

export default Avatar;
