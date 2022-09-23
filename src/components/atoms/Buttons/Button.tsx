import React, { FC } from 'react';
import { iProps } from './iProps';

import { Button as ButtonMUI, ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';

const Button: FC<iProps> = ({
	children,
	texto,
	handlerFn,
	disabled,
	customStyleObject,
	withBoolean
}) => {
	return (
		<>
			<ThemeProvider theme={theme}>

				<div className='c-element esto-es-un-class'>
					<ButtonMUI
						variant='contained'
						onClick={handlerFn}
						disabled={disabled}
						sx={customStyleObject}
						fullWidth={withBoolean}
					>
						sad adsasd
						{children}{texto} Hola soy un boton en otra rama
						oye mas texto
						cambio aca
					</ButtonMUI>
				</div>
			</ThemeProvider>
		</>
	);
}

export default Button;