import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PBox from './util/PBox';
import { SPACING } from '../constants/Constants';
import { makeStyles, Box, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    social: {
        paddingLeft: theme.spacing(SPACING.SMALL),
        paddingRight: theme.spacing(SPACING.SMALL),
    }
}))

const Social: React.FC = () => {

    const classes = useStyles();

    return (
        <PBox size='large'> 
            <Link href="https://github.com/CamerAllan"> 
            <Box component='span' className={classes.social}>
                <GitHubIcon fontSize='large' color='primary' />
            </Box>
            </Link>
            <Link href="https://www.linkedin.com/in/cameroncraigallan/">
                <Box component='span' className={classes.social}>
                    <LinkedInIcon fontSize='large' color='primary' />
                </Box>
            </Link>
        </PBox>
    )
}

export default Social 