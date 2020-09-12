import React from "react";
import { Box, Card, makeStyles, Typography, CardContent } from "@material-ui/core";
import { Item } from "types/index";
import Title from "./Title";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
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
    var rand = Math.random() >= 0.5;
    const bobsText = `${(rand ? "bit" : "bob")}${items.length != 1 ? "s" : ""}`
    const classes = useStyles();

    return (
        <Box >
            <Card variant='outlined'>
                <CardContent className={classes.root}>
                    <Title title={title} icon={icon} to={`/bits-and-bobs/${id}/`} />
                    <Typography color='secondary' align='right'>{`${items.length} ${bobsText}`}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
};

export default FolderCard;