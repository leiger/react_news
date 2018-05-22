import React, { Component } from 'react';
import Pc from './Pc/Pc';
import Mobile from './Mobile/Mobile';
import MediaQuery from 'react-responsive';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MediaQuery query='(min-device-width: 1224px)'>
          <Pc/>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <Mobile/>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
