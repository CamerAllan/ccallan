import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import { PostData } from "types/index";
import ColorLink from "./util/Link";
import EventIcon from '@material-ui/icons/Event';
import TimerIcon from '@material-ui/icons/Timer';
import { WORDS_PER_MINUTE } from "../constants/Constants";
import useIconStyles from "../styles/IconStyle";

const useStyles = makeStyles((theme) => ({
    date: {
        fontStyle: 'italic',
        color: theme.palette.text.secondary
    },
}));

interface PostCardProps {
    postData: PostData
}

const PostCard: React.FC<PostCardProps> = (props) => {

    const { postData: { id, title, description, date, wordCount } } = props;
    const classes = useStyles();
    const iconClasses = useIconStyles();

    const readTimeMins = Math.ceil(wordCount / WORDS_PER_MINUTE)

    const formatDate = (unixTimestamp: number) => {
        const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
        const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(unixTimestamp) 
        return `${da} ${mo}, ${ye}`
    }

    return (
        <Box>
            <ColorLink to={`/blog/post/${id}/`}>
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>
                <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                <Box>
                    <EventIcon className={iconClasses.icon} fontSize='inherit'/>
                    <Typography display='inline' className={classes.date} variant="body2" color="textSecondary" component="p">
                        {formatDate(date)}
                    </Typography>
                </Box>
                <Box>
                    <TimerIcon className={iconClasses.icon} fontSize='inherit'/> 
                    <Typography display='inline' className={classes.date} variant="body2" color="textSecondary" component="p">
                        {`${readTimeMins} minutes`}
                    </Typography>
                </Box>
            </ColorLink>
        </Box>
    )
};

export default PostCard;