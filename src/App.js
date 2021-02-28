import React from 'react';
//import {connect} from 'react-redux';
class Num extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dig1: Math.floor(Math.random() * 10),
    dig2:Math.floor(Math.random() * 10),
    dig3:Math.floor(Math.random() * 10)
    
  }};
  handleClick() {
    this.setState(prevState => ({
      dig1: Math.floor(Math.random() * 10),
    dig2:Math.floor(Math.random() * 10),
    dig3:Math.floor(Math.random() * 10)
    }));
  }
  handleClickDebug() {
    this.setState(prevState => ({
      dig1: 7,
    dig2:7,
    dig3:7
    }));
  }

  render() {
    return (<div><button>{
      Math.floor(this.state.dig1)
    
    }</button>    
    <button>{Math.floor(this.state.dig2)}</button> 
    <button>{Math.floor(this.state.dig3)}</button>  </div>   
    );
  }
}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }
  

  onClick = () => {
    this.child.current.handleClick();
  };
  onClickDebug = () => {
    this.child.current.handleClickDebug();
  };
  render() {
    return (<div>

      <Num ref={this.child}/>
      <button onClick={this.onClick}>spin</button>
      <button onClick={this.onClickDebug}>debug</button>
      </div>
    );
  }
}

function Game(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div>
      <Toggle/>
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Open: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      Open: !prevState.Open
    }));
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleToggleClick}>
          {this.state.Open ? 'Close' : 'Open'}
        </button>
        <Game warn={this.state.Open} />
        
      </div>
    );
  }
}

function App() {
  return (
    <div><Page />

    </div>
  );
}


export default App;