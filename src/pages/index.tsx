import React from 'react'
import { Typography, makeStyles, Box } from '@material-ui/core'
import { ColorLinkExternal, ColorLinkInternal } from 'components/util/Link';

const useStyles = makeStyles(() => ({
  root: {
  }
}));

export default () => {

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography >
        <h1>
          About me
        </h1>
        <p> Hi, I'm <b>Cameron Allan</b>.</p>
        <p> I'm currently software engineering at <ColorLinkExternal to='https://www.dunnhumby.com'>dunnhumby</ColorLinkExternal> </p>
        <p> I built this site to encourage myself to write more. There's a <ColorLinkInternal to='/bits-and-bobs/posts'>blog</ColorLinkInternal> featuring fully formed thoughts and coherent sentences, then there's <ColorLinkInternal to='/bits-and-bobs'>bits & bobs</ColorLinkInternal> featuring everything else.</p>
        <p> This gives me a space to put pen to paper no matter what level of effort I feel like putting in, so no excuses. </p>
        <p> Feel free to reach out to me for any reason at <ColorLinkExternal to='mailto:cameronallandev@gmail.com'>cameronallandev@gmail.com</ColorLinkExternal></p>
      </Typography>
    </Box >
  )
}
