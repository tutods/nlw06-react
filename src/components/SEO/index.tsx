import { Helmet } from 'react-helmet';

type Props = {
	title?: string;
	image?: string;
	description?: string;
};

const SEO = ({ title, image, description, ...props }: Props) => {
	return (
		<Helmet>
			<title>{title && `${title} | `}Letmeask</title>
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
				content={image || '/media/Letmeask.jpg'}
			/>
			<meta
				property='og:title'
				content={`${title && `${title} | `}Letmeask`}
			/>
		</Helmet>
	);
};

export default SEO;
