import React from "react";
import { Box, Card, makeStyles, Typography, CardContent } from "@material-ui/core";
import { ColorLinkInternal } from "./util/Link";
import { MaterialIcon } from "../util/MaterialIcon"
import { Item } from "types/index";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    left: {
        flex: '1 0 auto'
    },
    right: {
    }
}))

export interface FolderProps {
    id: string
    title: string
    description: string
    icon: string
    live: boolean
    items: Item[]
}

const FolderCard: React.FC<FolderProps> = (props) => {

    const { id, title, icon, items } = props;
    const classes = useStyles();

    return (
        <Box >
            <ColorLinkInternal to={`/bits-and-bobs/${id}/`}>
                <Card variant='outlined'>
                    <CardContent className={classes.root}>
                        <Box className={classes.left}>
                            <Typography gutterBottom component="h5" variant="h5">
                                {MaterialIcon({ icon })}
                            </Typography>
                            <Typography color='secondary' component="h5" variant="h5">
                                {title}
                            </Typography>
                        </Box>
                        <Box className={classes.right}>
                            <Typography color='primary' align='right'><b>{items.length}</b></Typography>
                        </Box>
                    </CardContent>
                </Card>
            </ColorLinkInternal>
        </Box>
    )
};

export default FolderCard;