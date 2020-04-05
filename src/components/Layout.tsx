import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { makeStyles, Box } from "@material-ui/core";
import { MD } from "../constants/Constants";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up(MD)]: { flexDirection: 'row' }
    },
    
    sidebar: {
        width: '100%',
        [theme.breakpoints.up(MD)]: { width: '300px', height: '100vh' }
    },
    content: {
        padding: theme.spacing(3),
        flex: '1'
    }
}));

const Layout: React.FC = () => {

    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.sidebar}>
                <Sidebar />
            </Box>
            <Box className={classes.content}>
                <Content />
            </Box>
        </Box>
    )
};

export default Layout;