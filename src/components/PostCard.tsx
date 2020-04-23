import React from "react";
import { Typography, Box, makeStyles, Chip } from "@material-ui/core";
import { PostData } from "types/index";
import ColorLink from "./util/Link";
import EventIcon from '@material-ui/icons/Event';
import TimerIcon from '@material-ui/icons/Timer';
import { WORDS_PER_MINUTE, SPACING } from "../constants/Constants";
import useIconStyles from "../styles/IconStyle";

const useStyles = makeStyles((theme) => ({
    date: {
        fontStyle: 'italic',
        color: theme.palette.text.secondary
    },
    tag: {
        position: 'relative',
        bottom: 2,
        marginRight: theme.spacing(SPACING.SMALL)

    }
}));

interface PostCardProps {
    postData: PostData
}

const PostCard: React.FC<PostCardProps> = (props) => {

    const { postData: { id, title, description, date, wordCount, tags } } = props;
    const classes = useStyles();
    const iconClasses = useIconStyles();

    const readTimeMins = Math.ceil(wordCount / WORDS_PER_MINUTE)

    const formatDate = (unixTimestamp: number) => {
        // const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
        // const [{ value: mo }, , { value: da }, , { value: ye }] = dtf.formatToParts(unixTimestamp)
        // return `${da} ${mo}, ${ye}`
        return unixTimestamp
    }

    const tagComponent = tags.map((tag) => (<Chip className={classes.tag} variant="outlined" size='small' label={tag}></Chip>))

    return (
        <Box>
            <ColorLink to={`/blog/post/${id}/`}>
                <Typography gutterBottom variant="h5">
                    {title} {tagComponent}
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                    {description}
                </Typography>
                <Box>
                    <EventIcon className={iconClasses.icon} fontSize='inherit' />
                    <Typography display='inline' className={classes.date} variant="body2" component="p">
                        {formatDate(date)}
                    </Typography>
                </Box>
                <Box>
                    <TimerIcon className={iconClasses.icon} fontSize='inherit' />
                    <Typography display='inline' className={classes.date} variant="body2" component="p">
                        {`${readTimeMins} minutes`}
                    </Typography>
                </Box>
                <Box>

                </Box>
            </ColorLink>
        </Box>
    )
};

export default PostCard;