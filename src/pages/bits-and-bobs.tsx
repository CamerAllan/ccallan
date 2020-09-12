import React from 'react'
import { useRouteData } from 'react-static'
import FolderCard, { FolderProps } from '../components/FolderCard'
import PaddedBox from '../components/util/PaddedBox'
import { Box, Divider, useMediaQuery, Theme } from '@material-ui/core'
import { ColorLinkInternal } from '../components/util/Link'
import Cascade from '../components/Cascade'
import { SM, XS } from '../constants/Constants'

export default () => {
  const data: { folders: FolderProps[] } = useRouteData()

  console.log(data)

  const s = useMediaQuery((theme: Theme) => theme.breakpoints.down(SM))
  const xs = useMediaQuery((theme: Theme) => theme.breakpoints.down(XS))

  const numCols = xs ? 1 : (s ? 2 : 3)

  // Sort folders alphabetically
  data.folders.sort((a, b) => {
    if (a.title < b.title)
      return -1;
    else return 1;
  })

  return (
    <Box>
      <ColorLinkInternal to="/">{'<'} Back</ColorLinkInternal>
      <h1>Bits & Bobs</h1>
      <h2>Ideas, Drafts, Opinions</h2>
      <p>
        This is a dumping ground for ideas, things I want to remember, and any other notes that need a place. <br />
        Perfection is the enemy - anything goes here.
      </p>
      <Divider />
      <Cascade numCols={numCols} items={
        data.folders.map(folder => (
          !folder.live ? null :
            <PaddedBox>
              <FolderCard {...folder} />
            </PaddedBox>
        ))
      } />
    </Box >
  )
}
