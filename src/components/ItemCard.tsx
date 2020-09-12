import React from "react";
import { Box, Card, makeStyles, CardContent, Typography } from "@material-ui/core";
import { ColorLinkInternal } from "./util/Link";
import { Item } from "types/index";
import ItemContent from "./ItemContent";
import { MaterialIcon } from "../util/MaterialIcon";

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
    item: Item
}

const FolderCard: React.FC<ItemProps> = (props) => {

    const { id, title, long, icon, containingFolder } = props.item;
    console.log(props.item)
    const classes = useStyles();

    return (
        <Box >
            <Card variant='outlined'>
                <CardContent className={classes.root}>
                    <Box className={classes.left}>
                        <Typography gutterBottom component="h5" variant="h5">
                            {MaterialIcon({ icon })}
                        </Typography>
                        <ColorLinkInternal to={`/bits-and-bobs/${containingFolder}/${id}/`}>
                            <Typography gutterBottom color='secondary' component="h5" variant="h5">{title}</Typography>
                        </ColorLinkInternal>
                    </Box>
                    <Box className={classes.right}>
                        {
                            long ? (
                                <>
                                    <ItemContent preview onlyDescription item={props.item} containingFolder={containingFolder} />
                                </>)
                                :
                                <ItemContent preview item={props.item} containingFolder={containingFolder} />
                        }

                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
};

export default FolderCard;