import { useMemo } from 'react';

import Required from '../required/Required';
import Error from '../error/Error';

import { TextArea, InputLabel, InputSpan, StyledInput, StyledCheckbox, CheckboxContainer, StyledFileInput } from './Input.styles';

import { PropTypes } from './Input.types';

const Input: React.FC<PropTypes> = ({
	fieldName,
	valueName,
	type,
	options,
	isRequired,
	columns,
	error,
	registerCallback,
	...props
}) => {
	const parsedColumns = useMemo(() => {
		switch (columns) {
			case '0.5':
				return '50';
			case '0.33':
				return '33.33';
			case '0.66':
				return '66.66';
			case '0.25':
				return '25';
			case '0.2':
				return '20';
			default:
				return '100';
		}
	}, [])

	if (type === 'textarea') {
		return (
			<InputLabel>
				<InputSpan
					columns={parsedColumns}
				>
					{fieldName}
					<Required required={isRequired} />
				</InputSpan>
				<TextArea
					rows={15}
					error={error}
					{...props}
					{...registerCallback}
				/>
				{error ? <Error /> : null}
			</InputLabel>
		);
	}

	if (type === 'file') {
		return (
			<InputLabel
				columns={parsedColumns}
			>
				<InputSpan>
					{fieldName}
					<Required required={isRequired} />
				</InputSpan>
				<StyledFileInput
					type={type}
					error={error}
					accept={'.zip, .pdf, .jpg, .jpeg, .png'}
					{...props}
					{...registerCallback}
				/>
				{error ? <Error /> : null}
			</InputLabel>
		);
	}

	if (type === 'checkbox' || type === 'radio') {
		return (
			<InputLabel
				columns={parsedColumns}
				as={'div'}
			>
				<InputSpan style={{fontWeight: 700}}>
					{fieldName}
					<Required required={isRequired} />
				</InputSpan>
				{options?.map((option, index) => {
					return (
						<CheckboxContainer key={index}>
							<StyledCheckbox
								type={type}
								error={error}
								value={option}
								id={`${valueName}-${option}`}
								{...registerCallback}
							/>
							<InputLabel htmlFor={`${valueName}-${option}`}>{option}</InputLabel>
						</CheckboxContainer>
					)
				})}
				{error ? <Error /> : null}
			</InputLabel>
		);
	}

	return (
		<InputLabel
			columns={parsedColumns}
		>
			<InputSpan>
				{fieldName}
				<Required required={isRequired} />
			</InputSpan>
			<StyledInput
				type={type}
				error={error}
				{...props}
				{...registerCallback}
			/>
			{error ? <Error /> : null}
		</InputLabel>
	);
};

export default Input;
