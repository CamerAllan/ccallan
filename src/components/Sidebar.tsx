import React from 'react'
import Bio from './Bio'
import { makeStyles, Box, Typography } from '@material-ui/core'
import Social from './Social';
import Navigation from './Navigation';
import { SPACING, SM } from '../constants/Constants';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(SPACING.MEDIUM),
        backgroundColor: theme.palette.background.paper,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up(SM)]: {
            minHeight: '100vh',
        }
    }

}));

export default () => {
    const classes = useStyles();

    return (
        <Typography color='textSecondary'>
            <Box className={classes.root}>
                <Bio name='Cameron Allan' imageSrc='/images/pp4.jpg?nf_resize=fit&w=400&h=400' />
                <Navigation />
                <Social />
            </Box>
        </Typography>
    )
}