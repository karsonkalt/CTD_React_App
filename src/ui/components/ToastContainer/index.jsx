import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { useToast } from '../../../contexts/ToastContext';
import { Toast } from '../Toast';

// const PERSISTED_DURATION = 5000;
// const ANIMATION_DURATION = 750;

const useStyles = createUseStyles({
  root: {
    position: 'fixed',
    left: 20,
    bottom: 65,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

function ToastContainer({}) {
  const styles = useStyles();
  const { toasts } = useToast();

  // useEffect(() => {
  //   if (!persisted) {
  //     setTimeout(() => {
  //       setOpen(false);
  //     }, PERSISTED_DURATION);
  //   }
  // }, []);

  return (
    <div className={styles.root}>
      {toasts.map((toast) => (
        <Toast id={toast.id}>{toast.text}</Toast>
      ))}
    </div>
  );
}

ToastContainer.propTypes = {};

export { ToastContainer };
