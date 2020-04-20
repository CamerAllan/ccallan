import React from 'react'
import { Box, makeStyles, BoxProps } from '@material-ui/core'
import { SPACING } from '../../constants/Constants'

const useStyles = makeStyles((theme) => ({
    small: {
        paddingTop: theme.spacing(SPACING.SMALL),
        paddingBottom: theme.spacing(SPACING.SMALL)
    },
    medium: {
        paddingTop: theme.spacing(SPACING.MEDIUM),
        paddingBottom: theme.spacing(SPACING.MEDIUM)
    },
    large: {
        paddingTop: theme.spacing(SPACING.LARGE),
        paddingBottom: theme.spacing(SPACING.LARGE)
    }
}))

interface PaddedBoxProps {
    size?: string;
    className?: string;
}

const PaddedBox: React.FC<BoxProps & PaddedBoxProps> = (props) => {

    const classes = useStyles();

    let size = classes.medium;

    switch (props.size) {
        case 'small': size = classes.small;
        case 'medium': size = classes.medium;
        case 'large': size = classes.large;
    }

    return (
        <Box {...props} className={props.className ? props.className : size}>{props.children}</Box>
    )
}

export default PaddedBox

