import React from 'react';
import PropTypes from 'prop-types';
import classes from './DirectionButton.module.css';

const directionButton = ({ providerLink }) => (
  <a rel="noreferrer noopener" target="_blank" href={providerLink} className={classes.DirectionButton}>Provider Details</a>
);

directionButton.propTypes = {
  providerLink: PropTypes.string.isRequired,
};

export default directionButton;
