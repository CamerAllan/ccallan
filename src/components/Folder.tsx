import React from 'react'
import { useRouteData } from 'react-static'
import PaddedBox from 'components/util/PaddedBox'
import { Box, makeStyles, Divider } from '@material-ui/core'
import { SPACING } from '../constants/Constants'
import ItemCard from './ItemCard'
import { Folder } from 'types/index'
import { ColorLinkInternal } from './util/Link'

const useStyles = makeStyles((theme) => ({
    folder: {
        display: 'flex',
        flexFlow: 'row wrap',
        padding: theme.spacing(SPACING.SMALL)
    },
    item: {
        flex: '1 1',
        minWidth: 200,
        margin: theme.spacing(SPACING.SMALL)
    }
}))

export default () => {
    const { folder: { id, title, description, items } }: { folder: Folder } = useRouteData()
    const classes = useStyles()

    // Sort contents by date
    items.sort((a, b) => (b.date - a.date))

    return (
        <Box>
            <ColorLinkInternal to="/bits-and-bobs/">{'<'} Back</ColorLinkInternal>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <Divider />
            <Box className={classes.folder}>
                {items.map(item => (
                    !item.live ? null :
                        <Box className={classes.item}>
                            <PaddedBox>
                                < ItemCard item={item} containingFolder={id} />
                            </PaddedBox>
                        </Box>
                ))}
            </Box>
        </Box>
    )
}
