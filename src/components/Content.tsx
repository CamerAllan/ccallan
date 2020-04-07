import React from "react";
import { Router } from "@reach/router";
import { Routes } from "react-static";
import { makeStyles, Box, LinearProgress } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 750
    }
}) 

const Content: React.FC = () => {
    
    const classes = useStyles();
    
    return (
        <Box className={classes.root}>
            <React.Suspense fallback={<LinearProgress variant="query" />}>
                <Router>
                    <Routes path="*" />
                </Router>
            </React.Suspense>
        </Box>
    )
}

export default Content ;