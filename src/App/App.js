import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PcIndex from './Pc/Pages/PcIndex';
import PcDetail from './Pc/Pages/PcDetail';
import Mobile from './Mobile/Mobile';
import MediaQuery from 'react-responsive';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MediaQuery query='(min-device-width: 1224px)'>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={PcIndex}/>
              <Route path='/details/:uniquekey' component={PcDetail}/>
            </Switch>
          </BrowserRouter>

        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <Mobile/>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
