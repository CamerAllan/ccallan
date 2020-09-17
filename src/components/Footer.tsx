import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Navigation from "./Navigation";
import Social from "./Social";
import { SPACING } from "../constants/Constants";

const useStyles = makeStyles(theme => ({
    root: {
        height: '200px',
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing(SPACING.MEDIUM),
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const Footer: React.FC = () => {

    const classes = useStyles();

    const funk = Math.random() < 0.1;

    return (
        <Typography color='textSecondary'>
            <Box className={classes.root}>
                <Typography gutterBottom>{funk ? '🗿' : '👋'}</Typography>
                <Navigation />
                <Social />
            </Box>
        </Typography>
    );
}

export default Footer;