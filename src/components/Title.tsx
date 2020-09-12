import { Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { MaterialIcon } from "./util/MaterialIcon"
import { ColorLinkInternal } from "./util/Link"

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    text: {
        flex: '1 0'
    },
    icon: {
        flex: '0 1'
    }
}))

export interface TitleProps {
    title: string;
    to?: string;
    icon: string;
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.text}>
                <ColorLinkInternal to={props.to}>
                    <Typography color='secondary' component="h5" variant="h5">
                        {props.title}
                    </Typography>
                </ColorLinkInternal>
            </Box>
            <Box className={classes.icon}>
                <Typography component="h5" variant="h5">
                    <MaterialIcon icon={props.icon} />
                </Typography>
            </Box>
        </Box >
    )
}

export default Title;