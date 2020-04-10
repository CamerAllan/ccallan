import React from 'react'
import { Container, Typography, makeStyles } from '@material-ui/core'
import BuildIcon from '@material-ui/icons/Build';
import ColorLink from 'components/util/Link';

const useStyles = makeStyles(() => ({
  root: {
  }
}));

export default () => {
  
  const classes = useStyles();

  return (
  <Container className={classes.root}>
    <Typography align='center'>
        <h1>
            This site is under construction!
        </h1>
        <p> Take a look at my first post on the <ColorLink to='blog' >blog</ColorLink> and check back later for updates! </p>
      <BuildIcon fontSize='large'/>
    </Typography>
</Container>
)}
