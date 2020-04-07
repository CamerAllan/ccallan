import React from "react";
import { Typography, Box } from "@material-ui/core";
import { PostData } from "types/index";
import ColorLink from "./util/Link";

// const useStyles = makeStyles(() => ({
//     root: {
//         maxWidth: 600
//     },
// }));

interface PostCardProps {
    postData: PostData
}

const PostCard: React.FC<PostCardProps> = (props) => {

    const { postData: { id, title, description, date } } = props;
    // const classes = useStyles();

    return (
        <Box>
            <ColorLink to={`/blog/post/${id}/`}>
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    {date}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </ColorLink>
        </Box>
    )
};

export default PostCard;