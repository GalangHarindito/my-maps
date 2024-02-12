import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "config/config";
import { lazyLoad } from "pages";
import PageBase from "component/layout/BaseLayout";
import Home from "pages/Home";

function App({ history, store }) {
  return (
    <BrowserRouter>
      <PageBase>
        <Routes>
          <Route exact path={routes.HOME()} element={<Home />} />
        </Routes>
      </PageBase>
    </BrowserRouter>
  );
}

export default App;
