import React from "react";
import { Box, Card, makeStyles, CardContent, Typography } from "@material-ui/core";
import { Item } from "types/index";
import ItemContent from "./ItemContent";
import Title from "./Title";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap'
    }
}))

export interface ItemProps {
    item: Item
}

const FolderCard: React.FC<ItemProps> = (props) => {

    const classes = useStyles();

    const { id, title, long, icon, containingFolder } = props.item;

    return (
        <Box >
            <Card variant='outlined'>
                <CardContent className={classes.root}>
                    <Title title={title} icon={icon} to={`/bits-and-bobs/${containingFolder}/${id}/`} />
                    <Box>
                        {
                            long ? (
                                <>
                                    <ItemContent preview onlyDescription item={props.item} containingFolder={containingFolder} />
                                    <Typography color={"secondary"}>Read more...</Typography>
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