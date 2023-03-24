import React from 'react';
import SearchPage from './pages/SearchPage';
import AddShipment from './pages/AddShipment';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Switch>
           <Route component = { SearchPage }  path="/" exact />
           <Route component = { AddShipment }  path="/addshipment" />
       </Switch>
    );
  }
}

export default App;
