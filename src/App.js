import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import History from './pages/History';
import './App.css';
import Home from "./pages/Home";
import Paintings from "./pages/Paintings";
import FormPaintings from "./containers/FormPaintings";
import Details from "./containers/Details";

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/paintings" component={Paintings} />
          <Route exact path="/history" component={History} />
          <Route exact path="/paintings/form" component={FormPaintings} />
          <Route exact path="/order/view/:id" component={Details} />
        </Switch>
      </Router>
    </>
  );
};
