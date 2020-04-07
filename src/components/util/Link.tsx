import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "@reach/router";

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.primary.main,
        textDecoration: 'none'
    },
}));

export interface LinkProps {
    to: string
}

const ColorLink: React.FC<LinkProps> = (props) => {

    const classes = useStyles();

    return (
    <Link className={classes.root} to={props.to}>{props.children}</Link>
    )
};

export default ColorLink;