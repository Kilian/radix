import { createGlobalStyle } from 'styled-components';
import css from '@styled-system/css';
import { fontStyles } from './fonts';

export const GlobalStyles = createGlobalStyle(
  css({
    '*': {
      boxSizing: 'border-box',
    },
    html: {
      fontSize: 3,
      fontFamily: 'normal',
      color: 'grays.7',
      backgroundColor: 'white',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
    },
    body: {
      margin: 0,
    },
    'input, button, select, textarea': {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'normal',
      color: 'inherit',
    },
    svg: {
      verticalAlign: 'middle',
      display: 'block',
    },
  }),
  {
    html: { lineHeight: 1.2 },
  },
  fontStyles
);
