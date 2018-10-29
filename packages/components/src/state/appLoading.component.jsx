import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import lottie from 'lottie-web/build/player/lottie_light';
import config from '@arborescence/config/app';

import obouleau from './animations/obouleau';
import foogere from './animations/foogere';

const animations = { obouleau, foogere, arborescence: obouleau };

class AppLoading extends Component {
  componentWillUnmount() {
    if (this.animation) {
      this.animation.destroy();
    }
  }

  getContainerRef = (elem) => {
    if (!elem) return;
    const { appId } = this.props;
    this.animation = lottie.loadAnimation({
      container: elem,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animations[appId],
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <div style={{ maxWidth: '60rem' }} ref={this.getContainerRef} />
      </div>
    );
  }
}

AppLoading.defaultProps = {
  appId: config.defaultApp.id,
};

AppLoading.propTypes = {
  appId: PropTypes.string,
};

export default AppLoading;
