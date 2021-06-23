import illustrationMedia from 'assets/media/illustration.svg';
import { ReactNode } from 'react';
import {
	Aside,
	AsideParagraph,
	AsideTitle,
	Container,
	CustomThemeSwitch,
	Main
} from './styles';

type Props = {
	children: ReactNode;
};

const AuthPages = ({ children, ...props }: Props) => {
	return (
		<Container {...props}>
			<CustomThemeSwitch />
			<Aside>
				<img
					src={illustrationMedia}
					alt={'Illustração de perguntas e respostas'}
				/>

				<AsideTitle>Crie salas de Q&amp;A ao-vivo</AsideTitle>
				<AsideParagraph>
					Tire as dúvidas da sua audiência em tempo-real
				</AsideParagraph>
			</Aside>
			<Main>{children}</Main>
		</Container>
	);
};

export default AuthPages;
