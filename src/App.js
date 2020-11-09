import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import TicTacToe from './containers/TicTacToe/TicTacToe';

class App extends Component {
  render () {
    return (
        <div>
          <Layout>
              <TicTacToe/>
          </Layout>
        </div>
    );
  }
}

export default App;
