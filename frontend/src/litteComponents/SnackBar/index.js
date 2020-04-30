import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const SnackBarBase = (props) => {
  const { open, onClose, message, type, setOpen } = props;
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
      <Alert variant="filled" onClose={() => onClose()} everity={type}>
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
  type: PropTypes.oneOf(['sucess', 'error', 'info', 'warning']),
  message: PropTypes.string.isRequired,
};
SnackBarBase.defaultProps = {
  open: false,
  type: 'sucess',
};
export default SnackBarBase;
