import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { makeStyles, Box, useMediaQuery, Theme } from "@material-ui/core";
import { SM, SPACING } from "../constants/Constants";
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up(SM)]: { flexDirection: 'row', height: '100vh' }
    },
    sidebar: {
        width: '100%',
        [theme.breakpoints.up(SM)]: { width: '300px' }
    },
    footer: {
        flex: '0 1',
        width: '100%',
    },
    content: {
        overflowY: 'auto',
        padding: theme.spacing(SPACING.MEDIUM),
        flex: '1'
    }
}));

const Layout: React.FC = () => {

    const desktop = useMediaQuery((theme: Theme) => theme.breakpoints.up(SM))
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.sidebar}>
                <Sidebar />
            </Box>
            <Box className={classes.content}>
                <Content />
            </Box>
            {!desktop &&
                (<Box className={classes.footer}>
                    <Footer />
                </Box>)
            }
        </Box>
    )
};

export default Layout;