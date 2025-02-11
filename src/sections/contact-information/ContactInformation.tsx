import { observer } from 'mobx-react';

import ExternalLink from '../../components/external-link/ExternalLink';

import {
	Address,
	Container,
	InnerContainer,
	Link,
	SmallText,
	Text
} from './ContactInformation.styles';

import { PropTypes } from './ContactInformation.types';

const ContactInformation: React.FC<PropTypes> = observer(( { attributes, ...props } ) => {
    const {address, phone_secretary, message_landline, phone_pavilion, phone_mobile, message_cell, email} = attributes;

	if ( !attributes ) return null;

	return (
		<Container {...props}>
			<Address>{ address }</Address>
			<InnerContainer>
				<Text>Secretaria: <ExternalLink href={`tel:${phone_secretary}`}>{phone_secretary}</ExternalLink></Text>
				<SmallText>{ message_landline }</SmallText>
			</InnerContainer>
			<InnerContainer>
				<Text>Pavilhão: <ExternalLink href={`tel:${phone_pavilion}`}>{phone_pavilion}</ExternalLink></Text>
				<SmallText>{ message_landline }</SmallText>
			</InnerContainer>
			<InnerContainer>
				<Text >Telemóvel: <ExternalLink href={`tel:${phone_mobile}`}>{phone_mobile}</ExternalLink></Text>
				<SmallText>{ message_cell }</SmallText>
			</InnerContainer>
			<Link href={ `mailto:${ email }` }>
				{ email }
			</Link>
		</Container>
	);
});

export default ContactInformation;
