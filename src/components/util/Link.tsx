import React from "react";
import { makeStyles, Link as CoreLink } from "@material-ui/core";
import { Link as ReachLink } from "@reach/router";

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.primary.main,
        textDecoration: 'none'
    },
}));

export interface LinkProps {
    to: string
}

export const ColorLinkExternal: React.FC<LinkProps> = (props) => {

    const classes = useStyles();

    return (
        <CoreLink className={classes.root} rel="noopener" href={props.to} target="_blank">{props.children}</CoreLink>
    )
};

export const ColorLinkInternal: React.FC<LinkProps> = (props) => {

    const classes = useStyles();

    return (
        <ReachLink className={classes.root} {...props}>{props.children}</ReachLink>
    )
};