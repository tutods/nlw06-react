import { Helmet } from 'react-helmet';

type Props = {
	title?: string;
	image?: string;
	description?: string;
};

const SEO = ({ title, image, description, ...props }: Props) => {
	return (
		<Helmet titleTemplate='Letmeask | %s' defaultTitle='Página Inicial'>
			<title>{title}</title>
			<meta
				property='og:title'
				content={`Letmeask${title && ` | ${title}`}`}
			/>
			<meta
				name='description'
				content={
					description
						? description
						: 'Aplicação desenvolvida no NLW05 da Rocketseat'
				}
			/>
			<meta
				property='og:image'
				content={
					image || 'https://letmeask-cc61e.web.app/media/Letmeask.jpg'
				}
			/>
			<meta
				property='og:title'
				content={`${title && `${title} | `}Letmeask`}
			/>
			<meta
				property='og:description'
				content={
					description
						? description
						: 'Aplicação desenvolvida no NLW05 da Rocketseat'
				}
			/>
			<meta property='og:url' content='https://letmeask-cc61e.web.app/' />
		</Helmet>
	);
};

export default SEO;
