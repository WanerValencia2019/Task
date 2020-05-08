import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const SnackBarBase = (props) => {
  const { open, onClose, message, type,variant } = props;
  console.log(onClose);
  const snack = (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={7000}
      onClose={() => onClose}
      message={message}
    >
      <Alert variant={variant} onClose={() => onClose()} severity={type}>
        {' '}
        {message}
      </Alert>
    </Snackbar>
  );
  return <div>{snack} </div>;
};

SnackBarBase.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  message: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['filled','standard','outlined']),
};
SnackBarBase.defaultProps = {
  open: false,
  type: 'success',
  variant:'filled'
};
export default SnackBarBase;
