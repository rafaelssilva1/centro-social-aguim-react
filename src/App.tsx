import { Global } from "@emotion/react";
import GlobalStyles from "./theme/global.styles";

import { BrowserRouter, Route, Routes } from "react-router";

import NotFound from "./pages/NotFound/NotFound";
import Header from "./sections/header/Header";
import Footer from "./sections/footer/Footer";
import Page from "./pages/Page/Page";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route index path='/' element={<Home />} />
          <Route path=":parent?/:id" element={<Page />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
