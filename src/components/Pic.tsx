import React from 'react'
import { Avatar as AvatarCore, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        height: '250px',
        width: '250px',
        border: `0.8rem double ${theme.palette.primary.main}`
    }
}));

interface IconProps {
    altText: string;
    src: string;
}

const Pic: React.FC<IconProps> = (props) => {

    const classes = useStyles();

    return (
        <AvatarCore className={classes.root} alt={props.altText} src={props.src} variant='circle' />
    )
}
export default Pic
