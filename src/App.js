import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      beerName: '',
      error: null,
      isLoaded: false, 
    };
  }

  componentDidMount() {

    fetch("https://api.punkapi.com/v2/beers/1")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result[0].name);
          this.setState({
            isLoaded: true,
            beerName: result[0].name
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { beerName, error, isLoaded } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Beer world</h1>
        </header>
        <div className="App-intro">
          Data retreived:
          <p>isLoaded: { isLoaded ? 'true' : 'false' } </p>
          <p>beerName: { beerName} </p>
        </div>
      </div>
    );
  }
}

export default App;
