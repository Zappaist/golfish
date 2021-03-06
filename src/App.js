import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Loop } from 'react-game-kit';

import * as appActions from './containers/App/actions';

import './App.css';

class App extends Component {
  static propTypes = {
    init: PropTypes.func,
  }

  componentDidMount() {
    this.props.init();
  }

  render() {
    return (
      <Loop>
      </Loop>
    );
  }
}

export default connect((state) => ({

}), (dispatch) => ({
  init: () => dispatch({ type: appActions.INIT }),
}))(App);
