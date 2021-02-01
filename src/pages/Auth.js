import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './Home';
import Paintings from './Paintings';
import History from './History';
import FormPaintings from './../containers/FormPaintings';
import Details from './../containers/Details';
import FormEdit from './../containers/FormEdit';
import Materials from './Materials';
import MaterialForm from "../containers/MaterialForm";
import Themes from "./Themes";
import ThemeForm from "../containers/ThemeForm";
import Measurements from './Measurements';
import MeasurementForm from "../containers/MeasurementForm";
import DeliveryZones from "./DeliveryZones";
import ZoneForm from "../containers/ZoneForm";
import Navbar from './../components/Navbar';
import Logout from "./Logout";

const Auth = () => {
  return (
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
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </Router>
  )
}

export default Auth
