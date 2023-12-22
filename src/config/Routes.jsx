import React from "react";
import PropTypes from "prop-types";
import { Route, Routes as Switch } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Home from "../pages/Home";
function Routes(props) {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/" element={<Home />} />
    </Switch>
  );
}

Routes.propTypes = {};

export default Routes;
