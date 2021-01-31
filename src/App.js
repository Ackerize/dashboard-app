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
import MaterialForm from "./containers/MaterialForm";
import ThemeForm from "./containers/ThemeForm";
import ZoneForm from "./containers/ZoneForm";
import MeasurementForm from "./containers/MeasurementForm";


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
          <Route exact path="/materials/new" component={MaterialForm} />
          <Route exact path="/materials/edit" component={MaterialForm} />
          <Route exact path="/themes" component={Themes} />
          <Route exact path="/themes/new" component={ThemeForm} />
          <Route exact path="/themes/edit" component={ThemeForm} />
          <Route exact path="/measurements" component={Measurements} />
          <Route exact path="/measurements/new" component={MeasurementForm} />
          <Route exact path="/measurements/edit" component={MeasurementForm} />
          <Route exact path="/delivery-zones" component={DeliveryZones} />
          <Route exact path="/delivery-zones/new" component={ZoneForm} />
          <Route exact path="/delivery-zones/edit" component={ZoneForm} />
        </Switch>
      </Router>
    </>
  );
};
