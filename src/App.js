import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { history } from 'store/index'
import { connect } from 'react-redux'
import { loadApp } from 'actions/app'
import { initEnvironment } from 'actions/environmentActions'

import Home from 'components/Home'

import { ModalContainer, ModalRoute } from 'react-router-modal';
// assumes webpack loader for css
// ... or include this css however you do that in your project ...
import 'react-router-modal/css/react-router-modal.css'

export class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadApp())
    dispatch(initEnvironment())
  }

  render() {
    return (
      <Router>
        <div style={{
            width: `${this.props.environment.screenWidth}px`,
            height: `${this.props.environment.screenHeight}px`
          }}>
          <Route exact path="/" component={Home} />
          <ModalContainer
            outDelay={250}
          />
        </div>
      </Router>
    )
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded,
    environment: state.environment
  };
}

export default connect(mapStateToProperties)(App)
