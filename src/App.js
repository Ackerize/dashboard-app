import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import History from './pages/History';
import './App.css';
import Home from "./pages/Home";
import Paintings from "./pages/Paintings";
import FormPaintings from "./containers/FormPaintings";
import Details from "./containers/Details";
import FormEdit from "./containers/FormEdit";
import Materials from "./pages/Materials";
import Themes from "./pages/Themes";
import Measurements from "./pages/Measurements";
import DeliveryZones from "./pages/DeliveryZones";

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/paintings" component={Paintings} />
          <Route exact path="/history" component={History} />
          <Route exact path="/paintings/new" component={FormPaintings} />
          <Route exact path="/order/view/:id" component={Details} />
          <Route exact path="/paintings/edit/:id" component={FormEdit} />
          <Route exact path="/materials" component={Materials} />
          <Route exact path="/themes" component={Themes} />
          <Route exact path="/measurements" component={Measurements} />
          <Route exact path="/delivery-zones" component={DeliveryZones} />
        </Switch>
      </Router>
    </>
  );
};
