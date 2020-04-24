import React from 'react'
import { useRouteData } from 'react-static'
import Folder, { FolderProps } from 'components/FolderCard'
import PaddedBox from 'components/util/PaddedBox'
import { Box, makeStyles } from '@material-ui/core'
import { SPACING } from '../constants/Constants'

const useStyles = makeStyles((theme) => ({
  folderContainer: {
    display: 'flex',
    flexFlow: 'row wrap'
  },
  folder: {
    width: 275,
    marginRight: theme.spacing(SPACING.MEDIUM)
  }
}))

export default () => {
  const data: { folders: FolderProps[] } = useRouteData()
  const classes = useStyles()

  return (
    <Box>
      <h1>Posts</h1>
      <Box className={classes.folderContainer}>
        {data.folders.map(folder => (
          !folder.live ? null :
            <Box className={classes.folder}>
              <PaddedBox>
                <Folder {...folder} />
              </PaddedBox>
            </Box>
        ))}
      </Box>
    </Box>
  )
}
