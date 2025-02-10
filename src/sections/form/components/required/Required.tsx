import { RequiredEl } from './Required.styles';
import { PropTypes } from './Required.types';

const Required: React.FC<PropTypes> = ( { required } ) => {
	if ( ! required ) return null;

	return <RequiredEl>*</RequiredEl>;
};

export default Required;
