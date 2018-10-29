import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const angles = {
  up: '180deg',
  right: '-90deg',
  down: '0deg',
  left: '90deg',
};

const BlockIcon = styled.svg`
  display: block;
`;

const ArrowSvg = styled.svg`
  display: block;
  transform: rotate(${({ direction }) => angles[direction]});
`;

export const Arrow = ({ className, size, stroke, strokeWidth, fill, direction }) => (
  <ArrowSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width={size}
    height={size}
    className={className}
    direction={direction}
  >
    <path stroke={stroke} strokeWidth={strokeWidth} fill={fill} d="M2 4h16l-8 15Z" />
  </ArrowSvg>
);

Arrow.defaultProps = {
  fill: 'none',
  stroke: 'white',
  strokeWidth: 2,
  size: 10,
  direction: 'down',
  className: '',
};

Arrow.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  direction: PropTypes.string,
};

export const Plus = ({ fill, size }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
    <g transform="translate(-9 -9)" fill={fill} fillRule="evenodd">
      <rect transform="rotate(-90 15.611 16)" x="14.833" y="9.389" width="1.556" height="13.222" rx=".778" />
      <rect x="14.833" y="9.389" width="1.556" height="13.222" rx=".778" />
    </g>
  </svg>
);

Plus.defaultProps = {
  fill: 'white',
  size: 10,
};

Plus.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
};

export const Folder = ({ fill, size }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 9">
    <g fill={fill} fillRule="nonzero">
      <path
        // eslint-disable-next-line max-len
        d="M7.855.517H3.209c-.056 0-.056.056-.113.056L.264 3.375s-.057.056-.057.112v5.716c0 .168.113.28.283.28h7.365c.17 0 .283-.112.283-.28V.797c0-.168-.113-.28-.283-.28zm-4.816.953v1.849H1.17l1.87-1.85zm4.532 7.452H.773V3.88h2.55c.17 0 .283-.112.283-.28V1.078H7.57v7.844z"
      />
      <path
        // eslint-disable-next-line max-len
        d="M2.396 5.748a.262.262 0 0 0-.383 0 .271.271 0 0 0 0 .388l1.369 1.222c.054.056.11.056.164.056.055 0 .164-.056.164-.111l2.3-2.888c.109-.111.054-.278-.055-.389-.11-.111-.274-.055-.384.056L3.436 6.747l-1.04-1z"
      />
    </g>
  </svg>
);

Folder.defaultProps = {
  fill: 'white',
  size: 10,
};

Folder.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
};

export const Download = ({ fill, size }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17">
    <path
      // eslint-disable-next-line max-len
      d="M14.914 12.613a.558.558 0 0 1 1.115 0v4.183c0 .308-.25.557-.557.557H1.528a.558.558 0 0 1-.557-.557v-4.183a.558.558 0 0 1 1.115 0v3.625h12.828v-3.625zM8.792.716c.223 0 .43.115.547.305l2.951 2.952a.642.642 0 0 1-.908.908L9.435 2.936v7.35a.643.643 0 0 1-1.286 0V2.886L6.147 4.89a.644.644 0 0 1-.91-.91L8.31.9a.64.64 0 0 1 .482-.184z"
      fill={fill}
      fillRule="nonzero"
    />
  </svg>
);

Download.defaultProps = {
  fill: 'white',
  size: 10,
};

Download.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
};

export const Slash = ({ fill, size }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24">
    <rect
      transform="rotate(45 70.243 -109.332)"
      x="113"
      y="3"
      width="3"
      height="30"
      rx="1.5"
      fill={fill}
      fillRule="nonzero"
    />
  </svg>
);

Slash.defaultProps = {
  fill: 'white',
  size: 10,
};

Slash.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
};

export const Cross = ({ fill, size }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.112 31.112">
    <path
      fill={fill}
      // eslint-disable-next-line max-len
      d="M31.112 1.414L29.698 0 15.556 14.142 1.414 0 0 1.414l14.142 14.142L0 29.698l1.414 1.414L15.556 16.97l14.142 14.142 1.414-1.414L16.97 15.556z"
    />
  </svg>
);

Cross.defaultProps = {
  fill: 'white',
  size: 10,
};

Cross.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
};

export const Check = ({ fill, size }) => (
  <BlockIcon width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.667 426.667">
    <path
      fill={fill}
      // eslint-disable-next-line max-len
      d="M213.333 0C95.518 0 0 95.514 0 213.333s95.518 213.333 213.333 213.333c117.828 0 213.333-95.514 213.333-213.333S331.157 0 213.333 0zm-39.134 322.918l-93.935-93.931 31.309-31.309 62.626 62.622 140.894-140.898 31.309 31.309-172.203 172.207z"
    />
  </BlockIcon>
);

Check.defaultProps = {
  fill: 'black',
  size: 10,
};

Check.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number,
};
