import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Radio extends Component {
  constructor() {
    super()
    this.state = {
      radioClick: ""
    };
  }

  onChange = (type) => {
    // on radio state change handler
    this.setState({ radioClick: type }, () => this.props.sortBy(type));
  }

  render() {
    return (
      <div className='radioButtons'>
        <div className='left'>
          <input id='name' onChange={() => this.onChange('name')} type='radio' checked={'name' === this.state.radioClick} />
          <label htmlFor='name'>&nbsp;&nbsp;Sort by name</label>
        </div>
        <div className='right'>
          <input id='age' onChange={() => this.onChange('age')} type='radio' checked={'age' === this.state.radioClick} />
          <label htmlFor='age'>&nbsp;&nbsp;Sort by age</label>
        </div>
      </div>
    );

  }
}

// Uncomment the snippet below
Radio.propTypes = {
  sortBy: PropTypes.func
}

export default Radio;
