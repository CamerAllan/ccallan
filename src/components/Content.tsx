import React from "react";
import { Routes } from "react-static";
import { makeStyles, Box } from "@material-ui/core";
import { Router } from "@reach/router";
import Analytics from "./Analytics";


const useStyles = makeStyles({
    root: {
        maxWidth: 750
    }
})



const Content: React.FC = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Analytics>
                    <Router>
                        <Routes path="*" />
                    </Router>
                </Analytics>
            </React.Suspense>
        </Box>
    )
}

export default Content;
