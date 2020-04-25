import React from "react";
import { Box, Card, makeStyles, CardContent, Typography } from "@material-ui/core";
import { ColorLinkInternal } from "./util/Link";
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

export interface ItemProps {
    containingFolder: string
    item: Item
}

const FolderCard: React.FC<ItemProps> = (props) => {

    const { id, title, description } = props.item;
    const classes = useStyles();

    return (
        <Box >
            <ColorLinkInternal to={`/bits-and-bobs/${props.containingFolder}/${id}/`}>
                <Card >
                    <CardContent className={classes.root}>
                        <Box className={classes.left}>
                            <Typography gutterBottom color='primary' component="h5" variant="h5">{title}</Typography>
                        </Box>
                        <Box className={classes.right}>
                            <Typography color='textSecondary'>{description}</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </ColorLinkInternal>
        </Box>
    )
};

export default FolderCard;