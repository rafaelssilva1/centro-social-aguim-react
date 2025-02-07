import { Global } from "@emotion/react";
import GlobalStyles from "./theme/global.styles";

import { BrowserRouter, Route, Routes } from "react-router";

import NotFound from "./pages/NotFound/NotFound";
import Header from "./sections/header/Header";
import Footer from "./sections/footer/Footer";
import Page from "./pages/Page/Page";
import Home from "./pages/Home/Home";
import { optionsStore } from "./state/stores/options";
import { useEffect } from "react";

const App: React.FC = () => {
  const {getOptions} = optionsStore;

  useEffect(() => {
    getOptions();
  }, [])

  return (
    <>
      <Global styles={GlobalStyles} />
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route index path='/' element={<Home />} />
          <Route path=":parent?/:id" element={<Page />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
