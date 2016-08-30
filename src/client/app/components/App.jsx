/* App.jsx */

import React from 'react';
import AddItem from '../containers/AddItem';
import FeedContainer from '../containers/FeedContainer';

class App extends React.Component {
  render () {
    return (
      <div>
        <AddItem />
        <FeedContainer />
      </div>
    );
  }
}

export default App;
