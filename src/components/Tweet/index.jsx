/*  COMPONENT NOTES 
    - This component uses a JSS approach to styling
    - JSS supports "SASS" syntax and lets us next selectors with the '&'
    - createUse styles returns a hook to us that can be invoked in the component
    - useStyles is a hook that takes an argument of a props object
    - We can use these props to conditionally render styles
*/

import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Button } from '../../ui/components';
import PropTypes from 'prop-types';
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  root: {
    border: (props) =>
      props.promoted
        ? `1px solid ${props.theme.promoted.outline}`
        : `1px solid ${props.theme.container.outline}`,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    backgroundColor: (props) =>
      props.promoted
        ? props.theme.promoted.background
        : props.theme.container.background,
    boxShadow: 'rgb(210 210 210) 0px 3px 6px 0px',
    width: '100%',
  },
  displayName: {
    fontWeight: 'bold',
  },
  username: {
    fontWeight: 'normal',
  },
  tweetBody: {
    fontSize: 14,
    paddingLeft: 20,
    borderLeft: (props) => `3px solid ${props.theme.translucent[10]}`,
    color: (props) => props.theme.translucent[70],
  },
  likes: {
    color: (props) => `3px solid ${props.theme.translucent[10]}`,
    fontSize: 12,
  },
});

function Tweet({ id, text, createdAt, promoted, author }) {
  const { theme } = useTheme();
  const styles = useStyles({ theme, promoted });

  const [likes, setLikes] = useState(0);

  const handleAddLike = () => setLikes(likes + 1);
  const handleRemoveLike = () => setLikes(likes - 1);

  return (
    <div className={styles.root} id={id}>
      <Link to={`/user/${author.id}`}>
        <div className={styles.displayName}>{author.displayName}</div>
        <div className={styles.username}>{author.username}</div>
      </Link>
      <p className={styles.tweetBody}>{text}</p>
      {likes === 0 && <Button onClick={handleAddLike}>Like</Button>}
      {likes > 0 && <Button onClick={handleRemoveLike}>Remove Like</Button>}
      <span className={styles.likes}>{likes} Likes</span>
    </div>
  );
}

Tweet.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  promoted: PropTypes.bool,
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
  }),
};

export { Tweet };
