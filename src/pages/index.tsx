import React from 'react'
import { Typography, makeStyles, Box, Divider, Theme, useMediaQuery } from '@material-ui/core'
import { ColorLinkInternal, ColorLinkExternal } from 'components/util/Link';
import Cascade from '../components/Cascade';
import ItemCard from '../components/ItemCard'
import PaddedBox from '../components/util/PaddedBox';
import { useRouteData } from 'react-static';
import { SM } from '../constants/Constants';
// import { Item } from '../../types/index';

const useStyles = makeStyles(() => ({
  root: {
  }
}));

export default () => {

  const classes = useStyles();

  const data: { latestItems: any } = useRouteData()

  const s = useMediaQuery((theme: Theme) => theme.breakpoints.down(SM))
  const numCols = s ? 1 : 2;

  return (
    <Box className={classes.root}>
      <Typography >
        <h1>
          Home
        </h1>
        <p> Hi, I'm <b>Cameron Allan</b>.</p>
        <p>This is my website, where I put stuff.</p>
        <p>If you go to <ColorLinkInternal to='/bits-and-bobs/'>Bits & Bobs</ColorLinkInternal>, you'll find a collection of niche projects, somewhat original thoughts, and radical articles.</p>
        <p>If that sounds great to you, take a peek.</p>
        <p> Feel free to reach out to me for any reason at <ColorLinkExternal to='mailto:cameronallandev@gmail.com'>cameronallandev@gmail.com</ColorLinkExternal></p>
      </Typography>

      <Divider />

      <h2>Recent</h2>
      <Cascade numCols={numCols} items={
        data.latestItems.map(item => {
          return (
            !item.live ? null :
              <PaddedBox>
                <ItemCard item={item} />
              </PaddedBox>
          )
        })
      } />
    </Box >
  )
}
