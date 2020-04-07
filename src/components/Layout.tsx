import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { makeStyles, Box } from "@material-ui/core";
import { SM, SPACING } from "../constants/Constants";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up(SM)]: { flexDirection: 'row', height: '100vh' }
    },
    
    sidebar: {
        width: '100%',
        [theme.breakpoints.up(SM)]: { width: '300px'  }
    },
    content: {
        overflowY: 'auto', 
        padding: theme.spacing(SPACING.MEDIUM),
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