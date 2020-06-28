import { THEME } from '@themes/theme';
import { CardOverrides } from 'baseui/card';
import { BREAKPOINTS } from '@themes/breakpoints';

export const CARD: CardOverrides = {
  Root: {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '40px',
      paddingRight: '32px',
      paddingBottom: '8px',
      paddingLeft: '32px',
      borderTopColor: THEME.colors.primary,
      borderRightColor: THEME.colors.primary,
      borderBottomColor: THEME.colors.primary,
      borderLeftColor: THEME.colors.primary,
      backgroundColor: THEME.colors.backgroundPrimary,
      width: '32%',

      [BREAKPOINTS.small]: {
        width: '80%',
        paddingRight: '16px',
        paddingLeft: '16px',
      },
    },
  },
  Contents: {
    style: {
      width: '100%',
    },
  },
  HeaderImage: {
    style: {
      height: '112px',
      marginBottom: 0,

      [BREAKPOINTS.small]: {
        height: '96px',
      },
    },
  },
  Title: {
    style: {
      textAlign: 'center',
      fontSize: '32px',
      marginBottom: '32px',

      [BREAKPOINTS.small]: {
        fontSize: '24px',
        marginBottom: '24px',
      },
    },
  },
};
