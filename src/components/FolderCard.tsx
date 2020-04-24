import React from "react";
import { Box, Card, makeStyles, Typography, CardContent } from "@material-ui/core";
import ColorLink from "./util/Link";
// import { SPACING } from "../constants/Constants";
import { MaterialIcon } from "../util/MaterialIcon"
import { Item } from "types/index";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    content: {
        flex: '1 0 auto'
    },
    media: {
        width: 50,
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

    const { id, title, icon } = props;
    const classes = useStyles();
    return (
        <Box >
            <ColorLink to={`/wiki/${id}/`}>
                <Card className={classes.root} >
                    <CardContent className={classes.content}>
                        <Typography color='primary' component="h5" variant="h5">{MaterialIcon({ icon })}{title}</Typography>
                    </CardContent>
                </Card>
            </ColorLink>
        </Box>
    )
    // return (
    //     <Box>
    //         <ColorLink to={`/blog/post/${id}/`}>
    //             <Typography gutterBottom variant="h5">
    //                 {title} {tagComponent}
    //             </Typography>
    //             <Typography gutterBottom variant="body2" component="p">
    //                 {description}
    //             </Typography>
    //             <Box>
    //                 <EventIcon className={iconClasses.icon} fontSize='inherit' />
    //                 <Typography display='inline' className={classes.date} variant="body2" component="p">
    //                     {formatDate(date)}
    //                 </Typography>
    //             </Box>
    //             <Box>
    //                 <TimerIcon className={iconClasses.icon} fontSize='inherit' />
    //                 <Typography display='inline' className={classes.date} variant="body2" component="p">
    //                     {`${readTimeMins} minutes`}
    //                 </Typography>
    //             </Box>
    //             <Box>

    //             </Box>
    //         </ColorLink>
    //     </Box>
    // )
};

export default FolderCard;