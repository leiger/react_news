import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PcIndex from './Pc/Pages/PcIndex';
import PcDetail from './Pc/Pages/PcDetail';
import MobileIndex from './Mobile/Pages/MobileIndex';
import MobileDetail from './Mobile/Pages/MobileDetail';
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
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={MobileIndex}/>
              <Route path='/details/:uniquekey' component={MobileDetail}/>
            </Switch>
          </BrowserRouter>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
