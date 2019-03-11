import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

  constructor(props){
    super(props);
    this.onClickIncrement = this.onClickIncrement.bind(this);
  }

  onClickIncrement(){
    if(this.props.value % 2 === 0){
      this.props.onIncrement()
    }
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        <button onClick={onDecrement}> - </button>
        {' '} {value} {' '} 
        <button onClick={onIncrement}> + </button>
        {' '}
        <button onClick={this.onClickIncrement}> + when % 2 = 0 </button>
      </p>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter;
