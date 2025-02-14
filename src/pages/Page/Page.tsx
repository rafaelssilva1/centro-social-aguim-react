import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

import { pagesStore } from "../../state/stores/pages";

import Loading from "../../components/loading/Loading";
import NotFound from "../NotFound/NotFound";

import { componentMap } from "./blocks";
import { PropTypes } from "./Page.types";

const Page: React.FC<PropTypes> = observer(({id}) => {
    const { id: paramId } = useParams();

    const idToUse = id ?? paramId;

    const {pages, loading, getPage} = pagesStore;

    const parsedId = Number(idToUse?.split('-').at(-1));

    useEffect(() => {
        getPage(parsedId);
    }, [parsedId]);

    const currentPage = pages.find(page => page.id === parsedId);    

    const contentToShow = currentPage?.data;

    if(loading) return <Loading />;

    if(!currentPage) return <NotFound />;

    return (
        <>
            {contentToShow?.map((block, index) => {
                const Component = componentMap[block.block];

                return Component ? <Component key={index} attributes={block.attributes} /> : null;
            })}
        </>
    )
})

export default Page;