import { observer } from 'mobx-react';
import { optionsStore } from '../../state/stores/options';

import Text from '../../components/text/Text';

import {
	Address,
	Container,
	InnerContainer,
	Link,
	SmallText,
} from './ContactInformation.styles';

const ContactInformation: React.FC = observer(( { ...props } ) => {
	const { options } = optionsStore;
    const {address, phone_secretary, message_landline, phone_pavilion, phone_mobile, message_cell, email} = options;

	if ( !options ) return null;

	return (
		<Container {...props}>
			<Address>{ address }</Address>
			<InnerContainer>
				<Text>{ `Secretaria: ${ phone_secretary }` }</Text>
				<SmallText>{ message_landline }</SmallText>
			</InnerContainer>
			<InnerContainer>
				<Text>{ `Pavilhão: ${ phone_pavilion }` }</Text>
				<SmallText>{ message_landline }</SmallText>
			</InnerContainer>
			<InnerContainer>
				<Text>{ `Telemóvel: ${ phone_mobile }` }</Text>
				<SmallText>{ message_cell }</SmallText>
			</InnerContainer>
			<Link href={ `mailto:${ email }` }>
				{ email }
			</Link>
		</Container>
	);
});

export default ContactInformation;
