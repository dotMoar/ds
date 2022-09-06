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

				<div className='c-element'>
					<ButtonMUI
						variant='contained'
						onClick={handlerFn}
						disabled={disabled}
						sx={customStyleObject}
						fullWidth={withBoolean}
					>
						{children}{texto} Hola soy un boton en otra rama
					</ButtonMUI>
				</div>
			</ThemeProvider>
		</>
	);
}

export default Button;