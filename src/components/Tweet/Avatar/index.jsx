import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  root: {
    display: 'inline-flex',
  },
  avatarCircle: {
    width: 40,
    height: 40,
    backgroundColor: (color) => color,
    marginRight: 10,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: 'white',
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textDecoration: 'none',
    color: '#383838',
  },
  displayName: {
    fontSize: 15,
    fontWeight: 500,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  username: {
    fontSize: 13, 
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

function Avatar({ id, username, displayName, color = '#d2d2d2' }) {
  const styles = useStyles(color);
  const avatarLetter = displayName[0];
  return (
    <div className={styles.root}>
      <div className={styles.avatarCircle}>{avatarLetter}</div>
      <Link className={styles.nameContainer} to={`/user/${id}`}>
        <div className={styles.displayName}>{displayName}</div>
        <div className={styles.username}>{username}</div>
      </Link>
    </div>
  );
}

Avatar.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export { Avatar };
