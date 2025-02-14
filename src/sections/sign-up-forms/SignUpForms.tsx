import { useState } from 'react';

import Heading from '../../components/heading/Heading';
import SanitizeHTMLContainer from '../../components/sanitize-html-container/SanitizeHTMLContainer';
import FilesCard from '../files/components/files-card/FilesCard';
import Modal from '../../components/modal/Modal';

import { formMap } from './forms/formMap';

import { Container, InnerContainer } from './SignUpForms.styles';

import { PropTypes, SignUpFormType } from './SignUpForms.types';
import SignUpForm from './components/SignUpForm/SignUpForm';

const SignUpForms: React.FC<PropTypes> = ( { attributes, ...props } ) => {
	const { title, description, data } = attributes;

	const [form, setForm] = useState<SignUpFormType>({
		title: '',
		preview: {
			url: '',
			alt: '',
			width: 0,
			height: 0
		},
		form: {
			value: '',
			label: '',
		}
	});
	const [isOpen, setIsOpen] = useState(false);

	const schema = formMap[form.form.value];

	return (
		<Container { ...props }>
                <Heading level="2">{ title }</Heading>
				<SanitizeHTMLContainer content={ description } />
			<InnerContainer>
				{data.map((item, index) => {
					return (
						<FilesCard item={item} callback={() => {
							setIsOpen(true);
							setForm(item);
						}} key={index} />
					)
				})}
			</InnerContainer>
			{
				form && schema ? <Modal isOpen={isOpen} title={form.title} callback={setIsOpen}><SignUpForm title={form.title} schema={schema} callback={setIsOpen}/></Modal> : null 
			}
		</Container>
	);
};

export default SignUpForms;
