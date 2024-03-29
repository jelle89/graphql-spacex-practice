import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches'
import './App.css';
import logo from './logo.jpg';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

class App extends Component {
  render() {
    return (

      <ApolloProvider client={client}>
        <div className="container">
          <img src={logo} alt='Spacex' style={{ width: 300, display: 'block', margin: 'auto'}}/>
          <Launches />
        </div>
      </ApolloProvider>  
    );
  }
}

export default App;
