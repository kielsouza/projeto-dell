import React from 'react';
import SearchPage from './pages/SearchPage';
import AddShipment from './pages/AddShipment';
import Reports from './pages/Reports';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.scss';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={SearchPage} path="/" exact />
          <Route component={AddShipment} path="/addshipment" />
          <Route component={Reports} path="/reports" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
