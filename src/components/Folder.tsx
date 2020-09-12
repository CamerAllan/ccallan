import React from 'react'
import { useRouteData } from 'react-static'
import PaddedBox from 'components/util/PaddedBox'
import { Box, Divider, useMediaQuery, Theme } from '@material-ui/core'
import ItemCard from './ItemCard'
import { Folder } from 'types/index'
import { ColorLinkInternal } from './util/Link'
import Cascade from './Cascade'
import { SM } from '../constants/Constants'

export default () => {
    const { folder: { title, description, items } }: { folder: Folder } = useRouteData()

    const s = useMediaQuery((theme: Theme) => theme.breakpoints.down(SM))

    const numCols = s ? 1 : 2

    // Sort contents by date
    items.sort((a, b) => (b.date - a.date))


    return (
        <Box>
            <ColorLinkInternal to="/bits-and-bobs/">{'<'} Back</ColorLinkInternal>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <Divider />
            <Cascade numCols={numCols} items={items.map(item => (
                <PaddedBox>
                    < ItemCard item={item} />
                </PaddedBox>
            ))} />
        </Box>
    )
}
