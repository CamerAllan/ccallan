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
                <Tab label='About' component={Link} to='about'/>
                <Tab label='Blog' component={Link} to='blog'/>
                <Tab label='Projects' component={Link} to='projects'/>
            </Tabs>
        </Box>
    )
}