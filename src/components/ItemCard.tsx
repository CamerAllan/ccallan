import React from "react";
import { Box, Card, makeStyles, CardContent, Typography } from "@material-ui/core";
import { ColorLinkInternal } from "./util/Link";
import { Item } from "types/index";
import ItemContent from "./ItemContent";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    left: {
        flex: '1 0 auto'
    },
    right: {
        width: '100%'
    }
}))

export interface ItemProps {
    containingFolder: string
    item: Item
}

const FolderCard: React.FC<ItemProps> = (props) => {

    const { id, title, long } = props.item;
    const classes = useStyles();

    return (
        <Box >
            <Card variant='outlined'>
                <CardContent className={classes.root}>
                    <Box className={classes.left}>
                        <ColorLinkInternal to={`/bits-and-bobs/${props.containingFolder}/${id}/`}>
                            <Typography gutterBottom color='primary' component="h5" variant="h5">{title}</Typography>
                        </ColorLinkInternal>
                    </Box>
                    <Box className={classes.right}>
                        {
                            long ? (
                                <>
                                    <ItemContent dark onlyDescription item={props.item} containingFolder={props.containingFolder} />
                                    <ColorLinkInternal to={`/bits-and-bobs/${props.containingFolder}/${id}/`}>
                                        <Typography align='right' color='primary'><i>Read full post...</i></Typography>
                                    </ColorLinkInternal>
                                </>)
                                :
                                <ItemContent dark item={props.item} containingFolder={props.containingFolder} />
                        }

                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
};

export default FolderCard;