import qs from 'query-string'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Input, Button } from 'react-bootstrap'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Home extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    const {screenWidth} = this.props;
    return (
      <div>
        <NavBar/>
        <header style={{display: 'flex', justifyContent: 'center', flexGrow: '0', order: '0'}}>
          <div style={{justifyContent: 'center'}}>
            React-Redux-React Router-Webpack Biolerplate
          </div>
        </header>
        <main style={{display: 'flex', justifyContent: 'center'}}>

        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      screenWidth: state.environment.screenWidth
  }
}

export default withRouter(connect(mapStateToProps)(Home))
