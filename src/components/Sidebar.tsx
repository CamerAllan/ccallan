import React from 'react'
import Bio from './Bio'
import { makeStyles, Tabs, Tab, Box } from '@material-ui/core'
import { Link } from '@reach/router';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(3),
        height: '100%',
        backgroundColor: theme.palette.secondary.main,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Bio name='Cameron Allan' imageSrc='/images/pp4.jpg' />
            <Tabs component='div' value='About' centered variant='fullWidth' orientation='vertical'>
                <Tab label='About'>
                    <Link to="/about">About</Link>
                </Tab>
                <Tab label='Projects'>
                    <Link to="/projects">Projects</Link>
                </Tab>
                <Tab label='Blog'>
                    <Link to="/blog">Blog</Link>
                </Tab>
                {/* <Tab label='Dynamic'>
                    <Link to="/dynamic">Dynamic</Link>
                </Tab> */}
            </Tabs>
        </Box>
    )
}