import illustrationMedia from 'assets/media/illustration.svg';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import NewRoom from './NewRoom';
import {
	Aside,
	AsideParagraph,
	AsideTitle,
	Container,
	CustomThemeSwitch,
	Logo,
	Main
} from './styles';

const AuthPages = () => {
	return (
		<Container>
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
			<Main>
				<div>
					<Logo />
					<Switch>
						<Route path={'/'} component={Home} exact />

						<Route path={'/rooms/new'} component={NewRoom} />
					</Switch>
				</div>
			</Main>
		</Container>
	);
};

export default AuthPages;
