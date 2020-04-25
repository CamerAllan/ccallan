import React from 'react'
import { useRouteData } from 'react-static'
import FolderCard, { FolderProps } from 'components/FolderCard'
import PaddedBox from 'components/util/PaddedBox'
import { Box, makeStyles, Divider } from '@material-ui/core'
import { SPACING } from '../constants/Constants'
import { ColorLinkInternal } from 'components/util/Link'

const useStyles = makeStyles((theme) => ({
  folderContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    padding: theme.spacing(SPACING.SMALL)
  },
  folder: {
    flex: '1 1',
    minWidth: 220,
    marginLeft: theme.spacing(SPACING.SMALL),
    marginRight: theme.spacing(SPACING.SMALL)
  }
}))

export default () => {
  const data: { folders: FolderProps[] } = useRouteData()
  const classes = useStyles()

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
      <Box className={classes.folderContainer}>
        {data.folders.map(folder => (
          !folder.live ? null :
            <Box key={folder.id} className={classes.folder}>
              <PaddedBox>
                <FolderCard {...folder} />
              </PaddedBox>
            </Box>
        ))}
      </Box>
    </Box >
  )
}
