import React from 'react'
import { Container, Typography, makeStyles } from '@material-ui/core'
import BuildIcon from '@material-ui/icons/Build';

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
        <p>
            Check back frequently for updates!
        </p>
      <BuildIcon fontSize='large'/>
    </Typography>
</Container>
)}
