import React, { Component } from 'react';
import PropTypes from 'prop-types';
import config from 'config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

@connect(
  state => ({
    online: state.online
  })
)
export default class Home extends Component {

  static propTypes = {
    online: PropTypes.bool.isRequired
  };

  render() {
    // const { online } = this.props;
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./dq_logo.jpg');
    return (
      <div className={styles.home}>
        <Helmet title="Home" />
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage} alt="presentation" />
              </p>
            </div>
            <h1>{config.app.title}</h1>
          </div>
        </div>

        <div className="container">
          <div className="text-center"><h1> COMMING SOON! </h1></div>
        </div>
      </div>
    );
  }
}
