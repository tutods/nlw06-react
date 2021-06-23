import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string;

		colors: {
			background: string;
			boxBackground: string;
			text: string;
			link: string;

			primary: string;

			google: string;

			danger: string;

			gray: {
				50: string;
				100: string;
				200: string;
				500: string;
				800: string;
			};

			white: string;
			black: string;
		};

		shadows: {
			default: string;
			textarea: string;
		};
	}
}
