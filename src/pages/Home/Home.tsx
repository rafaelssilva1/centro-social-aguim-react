import { useEffect } from "react";
import { observer } from "mobx-react";

import Page from "../Page/Page"
import Loading from "../../components/loading/Loading";

import { pagesStore } from "../../state/stores/pages";

const Home: React.FC = observer(() => {
  const {homepageId, getHomePage} = pagesStore;

  useEffect(() => {
    getHomePage();
  }, [])

  if(!homepageId) return <Loading />

  return (
      <Page id={String(homepageId)} />
  )
})

export default Home;