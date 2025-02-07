import { useCallback, useEffect, useState } from "react";
import Page from "../Page/Page"
import axios from "axios";
import { HomePropTypes } from "./Home.types";

const Home: React.FC = () => {
    const [homeId, setHomeId] = useState('');

    const getHomePageId = useCallback(
      async () => {
        const { data } = await axios.get(
            `${import.meta.env.VITE_REQUEST_URL}/homepage`
        ) as HomePropTypes;

        setHomeId(data.id);
      },
      [],
    )
    
    useEffect(() => {
        getHomePageId();
    }, [])

    return (
        <Page id={homeId} />
    )
}

export default Home;