import { rgba } from 'polished';

export const lightTheme = {
  title: 'light',

  colors: {
    background: '#e7e7e7',
    boxBackground: '#fff',
    text: '#29292e',
    link: '#E559F9',

    primary: '#835afd',

    google: '#EA4335',

    danger: '#E73F5D',

    gray: {
      50: '#F7F8FA',
      100: '#E6E8EB',
      200: '#AFB2B1',
      500: '#808080',
      800: '#494D4B',
    },

    white: '#fff',
    black: '#000',
  },

  shadows: {
    default: `0 0 0.8rem ${rgba('#fff', 0.15)}`,
    textarea: `0 4px 12px ${rgba('#000', 0.04)}`,
  },
};
