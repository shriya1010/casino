import React from 'react';
import {connect} from 'react-redux';

class Num extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: Math.floor(Math.random() * 10)};
    }
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: Math.floor(Math.random() * 10)
      }));
    }
  
    render() {
      return (<button>{this.state.isToggleOn}</button>        
      );
    }
  }
  export default connect(null,null,null,{ref:true})(Num);