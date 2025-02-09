import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Heading from '../../components/heading/Heading';
import Text from '../../components/text/Text';
import FilesCard from '../files/components/files-card/FilesCard';
import Chrevon from '../../components/icons/Chrevon';

import {
	Container,
	InnerContainer,
	CustomSelect,
	CustomSelectContainer,
    SelectOptions,
    Option,
    SelectContainer,
} from './Budgets.styles';

import { PropTypes } from './Budgets.types';
import useClickOutside from '../../hooks/useClickOutside';

const Budgets: React.FC<PropTypes> = ( { attributes, ...props } ) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchParam = searchParams.get('s');
    const searchParamIndex = attributes.findIndex(budget => budget.title === searchParam);

    const [currentYear, setCurrentYear] = useState(searchParamIndex === -1 ? 0 : searchParamIndex);
    const [isOpen, setIsOpen] = useState(false);

    const selectContainerRef = useRef<HTMLDivElement>(null);
    const selectOptionsRef = useRef<HTMLDivElement>(null);

    const closeSelect = () => setIsOpen(false);

    useClickOutside({ref: selectContainerRef, additionalRefs: [selectOptionsRef], callback: closeSelect});

    const updateQueryParam = (year: string) => {
        setSearchParams({ s: year });
    };

	return (
		<Container {...props}>
			<CustomSelectContainer>
				<Text>Ano a consultar</Text>
				<CustomSelect
                    onClick={() => setIsOpen(prev => !prev)}
                    ref={selectContainerRef}
                >
					<Text>{searchParamIndex !== -1 ? attributes[searchParamIndex]?.title : 'Selecione uma opção'}</Text>
					<Chrevon />
				</CustomSelect>
                {isOpen ? <SelectOptions ref={selectOptionsRef} style={{width: selectContainerRef.current?.clientWidth}}>
                    <SelectContainer>
                        {attributes.map((budget, index) => {
                            return (
                                <Option 
                                    key={index}
                                    onClick={(e) => {
                                        updateQueryParam(budget.title);
                                        setCurrentYear(index);
                                        closeSelect();
                                    }}
                                >
                                    {budget.title}
                                </Option>
                            )
                        })}
                    </SelectContainer>
                </SelectOptions> : null}
			</CustomSelectContainer>
			<Heading level="2">{ `Orçamentos & Contas ${ attributes[currentYear].title }` }</Heading>
			<InnerContainer>
				{ attributes[currentYear].files.map( ( item, index ) => (
					<FilesCard key={ index } item={ item } />
				) ) }
			</InnerContainer>
		</Container>
	);
};

export default Budgets;
