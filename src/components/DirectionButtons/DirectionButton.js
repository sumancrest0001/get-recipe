import React from 'react';
import PropTypes from 'prop-types';
import classes from './DirectionButton.module.css';

const directionButton = ({ providerLink }) => {
  return (
    <a href={providerLink} target="_blank" className={classes.DirectionButton}>Provider Details</a>
  );
};

directionButton.propTypes = {
  providerLink: PropTypes.string.isRequired,
}

export default directionButton;
