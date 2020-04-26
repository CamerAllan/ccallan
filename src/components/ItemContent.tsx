import React from 'react';
import ReactMarkdown from "react-markdown";
import { Item } from "types/index";
import { makeStyles, Theme, Box } from '@material-ui/core'
import { SPACING, IMAGE_DIMENSIONS } from '../constants/Constants'
import { ColorLinkExternal } from './util/Link';

const useStyles = makeStyles((theme: Theme) => ({
    image: {
        display: 'block',
        margin: '0 auto',
        maxWidth: '95%',
        border: `0.4rem solid ${theme.palette.primary.main}`
    },
    para: {
        margin: theme.spacing(SPACING.SMALL)
    },
    light: {

    },
    dark: {
        color: theme.palette.text.secondary
    }
}))

interface ItemContentProps {
    dark?: boolean;
    onlyDescription?: boolean;
    item: Item;
    containingFolder: string;
}

export default (props: ItemContentProps) => {

    const { item: { id, content, description }, containingFolder, dark, onlyDescription } = props

    const classes = useStyles();

    const linkRenderer = (props: any) => {
        return <ColorLinkExternal to={props.href} {...props} />
    }

    const imageRenderer = (props: any) => {
        return <img className={classes.image} {...props} />
    }

    const paragraphRenderer = (props: any) => {
        return <p className={classes.para} {...props} />
    }

    return (
        <Box className={dark ? classes.dark : classes.light}>
            <ReactMarkdown
                transformImageUri={(imageName) => `/images/${containingFolder}/${id}/${imageName}?nf_resize=smartcrop&w=${IMAGE_DIMENSIONS.WIDTH}&h=${IMAGE_DIMENSIONS.HEIGHT}`}
                source={onlyDescription ? description : content}
                renderers={{ image: imageRenderer, paragraph: paragraphRenderer, link: linkRenderer }} />
        </Box>
    )
}