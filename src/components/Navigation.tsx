import { Box, makeStyles, Theme } from '@material-ui/core';
import React from 'react'
import { ColorLinkInternal } from './util/Link';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        width: '100%'
    }
}));

const Navigation: React.FC = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root} >
            <ColorLinkInternal to="/">About Me</ColorLinkInternal>
            {'  //  '}
            <ColorLinkInternal to="/bits-and-bobs/posts">Blog</ColorLinkInternal>
            {'  //  '}
            <ColorLinkInternal to="/bits-and-bobs">Bits & Bobs</ColorLinkInternal>
        </Box>
    )
}

export default Navigation;
