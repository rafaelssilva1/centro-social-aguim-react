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

	if ( type === 'textarea' ) {
		return (
			<InputLabel>
				<InputSpan columns={ columns }>
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
		<InputLabel columns={ columns }>
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
