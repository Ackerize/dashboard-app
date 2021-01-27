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
          <Route path="/" exact component={Details} />
          <Route exact path="/paintings" component={Paintings} />
          <Route exact path="/history" component={History} />
          <Route exact path="/paintings/form" component={FormPaintings} />
        </Switch>
      </Router>
    </>
  );
};
