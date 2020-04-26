import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { SPACING } from '../constants/Constants';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap'
    },
    column: {
        flex: '1 1',
        display: 'flex',
        flexFlow: 'column nowrap'
    },
    item: {
        flex: '1 1',
        marginLeft: theme.spacing(SPACING.SMALL),
        marginRight: theme.spacing(SPACING.SMALL)
    }
}))

interface CascadeProps {
    numCols: number;
    items: any[];
}

export default (props: CascadeProps) => {

    const classes = useStyles();

    const cols = []

    for (let i = 0; i < props.numCols; i++) {
        cols.push([])
    }

    let col = 0
    props.items.forEach((item) => {
        cols[col].push(
            <Box className={classes.item}>
                {item}
            </Box>
        )
        col += 1;
        col %= props.numCols;
    })

    return (
        <Box className={classes.root}>
            {cols.map(col => {
                return <Box className={classes.column}> {col}</Box>
            })}
        </Box>
    )

}
