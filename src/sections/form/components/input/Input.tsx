import { useMemo } from 'react';

import Required from '../required/Required';
import Error from '../error/Error';

import { TextArea, InputLabel, InputSpan, StyledInput } from './Input.styles';

import { PropTypes } from './Input.types';

const Input: React.FC<PropTypes> = ( {
	fieldName,
	type,
	isRequired,
	columns,
	error,
	registerCallback,
	...props
} ) => {	
	const parsedColumns = useMemo(() => {
		switch(columns) {
			case '0.5':
			  return '50';
			case '0.33':
			  return '33.33';
			case '0.66':
			  return '66.66';
			default:
			  return '100';
		}
	}, [])

	if ( type === 'textarea' ) {
		return (
			<InputLabel>
				<InputSpan
					columns={ parsedColumns }
				>
					{ fieldName }
					<Required required={ isRequired } />
				</InputSpan>
				<TextArea
					rows={ 15 }
					error={error}
					{...props}
					{...registerCallback}
				/>
				{error ? <Error /> : null}
			</InputLabel>
		);
	}

	return (
		<InputLabel
			columns={ parsedColumns }
		>
			<InputSpan>
				{ fieldName }
				<Required required={ isRequired } />
			</InputSpan>
			<StyledInput
				type={ type }
				error={error}
				{...props}
				{...registerCallback}
			/>
			{error ? <Error /> : null}
		</InputLabel>
	);
};

export default Input;
