import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component{
  
  state = {
    count: 0
  };

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  }

  minus = () => {
    this.setState(current => ({count: current.count - 1}));
  }

  componentDidMount(){
    console.log('component rendered');
  }
  componentDidUpdate(){
    console.log('i just updating');
  }

  render(){
    console.log("i'm randering");
    return (
        <div>
          <h1>This number is: {this.state.count}</h1>
          <button onClick={this.add}>add</button>
          <button onClick={this.minus}>minus</button>
        </div>
      )
  }
}

export default App;
