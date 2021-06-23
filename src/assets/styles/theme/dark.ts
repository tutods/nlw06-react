import { rgba } from 'polished';

export const darkTheme = {
	title: 'dark',

	colors: {
		background: '#0D1117',
		boxBackground: '#21262D',
		text: '#fff',
		link: '#E559F9',

		primary: '#835afd',

		google: '#EA4335',

		danger: '#E73F5D',

		gray: {
			50: '#F7F8FA',
			100: '#E6E8EB',
			200: '#AFB2B1',
			500: '#C9C9C9',
			800: '#a5a5a5'
		},

		white: '#fff',
		black: '#000'
	},

	shadows: {
		default: `0 0 0.8rem ${rgba('#0D1117', 0.15)}`,
		textarea: `0 4px 12px ${rgba('#FFF', 0.04)}`
	}
};
