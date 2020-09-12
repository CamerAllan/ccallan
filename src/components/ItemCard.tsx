import React from "react";
import { Box, Card, makeStyles, CardContent, Typography } from "@material-ui/core";
import { Item } from "types/index";
import ItemContent from "./ItemContent";
import Title from "./Title";
import { WORDS_PER_MINUTE } from "../constants/Constants";
import { MaterialIcon } from "./util/MaterialIcon";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    foot: {
        display: 'flex',
        flexFlow: 'row'
    },
    footIcon: {
        position: 'relative',
        top: "-6px"
    }
}))

export interface ItemProps {
    item: Item
}

const FolderCard: React.FC<ItemProps> = (props) => {

    const classes = useStyles();

    const { id, title, long, icon, containingFolder, wordCount } = props.item;

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
                                    <Box className={classes.foot}>
                                        <MaterialIcon icon={"Timer"} />
                                        <Typography className={classes.footIcon} color={"primary"}>&nbsp;{`${Math.ceil(wordCount / WORDS_PER_MINUTE)} minute read`}</Typography>
                                    </Box>
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