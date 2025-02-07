import { observer } from "mobx-react";

import GoBackButton from "../../components/go-back-button/GoBackButton";
import Heading from "../../components/heading/Heading";

import { Container } from "./NotFound.styles";

const NotFound: React.FC = observer(() => {
    return (
        <Container>
            <Heading level="1">Página não encontrada</Heading>
            <GoBackButton />
        </Container>
    );
});

export default NotFound;