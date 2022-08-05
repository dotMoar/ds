import { createTheme } from '@mui/material/styles';
//import { primary, neutral, secondary } from './colors';
import {default as tokens} from './tokens.json';

// export type PaletteMode = 'light' | 'dark';

const theme = createTheme({
	palette: {
		// type: 'light' as PaletteMode,
		primary: {
			main: tokens.global.Primary.Main.value,
		},
		secondary: {
			main: tokens.global.Secondary.Main.value,
		},
	},
	typography: {
		fontFamily: tokens.global.fontFamilies.nunito.value,
		fontSize: 16,
		fontWeightLight: 300,
		button: {
			fontWeight: 400,
		},
	},
	spacing: 8,
	shape: {
		borderRadius: 4,
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableRipple: true,
			},
			styleOverrides: {
				root: {
					textTransform: 'inherit',
				}
			},
		},
	},
});

export default theme;