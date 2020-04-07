import React from 'react'
import { Tab, makeStyles } from '@material-ui/core';
import { Link } from '@reach/router'
import { SM } from '../constants/Constants';
import PBox from './util/PBox';

const useStyles = makeStyles(theme => ({
    tab: {},
    tabs: {
        [theme.breakpoints.up(SM)]: {
            width: '100%'
        } 
    }
}));

const Navigation: React.FC = () => {

    const classes = useStyles();

    return (
        <PBox >
            <Tab className={classes.tabs} label='About' component={Link} to='about'/>
            <Tab className={classes.tabs} label='Blog' component={Link} to='blog'/>
            <Tab className={classes.tabs} label='Projects' component={Link} to='projects'/>
        </PBox>
    )
}

export default Navigation;
