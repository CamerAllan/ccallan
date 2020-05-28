import React from 'react';
import ReactMarkdown from "react-markdown";
import { Item } from "types/index";
import { makeStyles, Theme, Box } from '@material-ui/core'
import { SPACING, IMAGE_DIMENSIONS } from '../constants/Constants'
import { ColorLinkExternal } from './util/Link';

const useStyles = (preview: boolean) => makeStyles((theme: Theme) => ({
    image: {
        width: preview ? IMAGE_DIMENSIONS.PREVIEW.WIDTH : 'unset',
        height: preview ? IMAGE_DIMENSIONS.PREVIEW.HEIGHT : IMAGE_DIMENSIONS.FULL.MAX_HEIGHT,
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
    preview?: boolean;
    onlyDescription?: boolean;
    item: Item;
    containingFolder: string;
}

export default (props: ItemContentProps) => {

    const { item: { id, content, description }, containingFolder, preview, onlyDescription } = props

    const classes = useStyles(preview)();

    const linkRenderer = (props: any) => {
        return <ColorLinkExternal to={props.href} {...props} />
    }

    const imageRenderer = (props: any) => {
        return (
            <img className={classes.image} {...props} />
        )
    }

    const paragraphRenderer = (props: any) => {
        return <p className={classes.para} {...props} />
    }

    const imageQuery = preview ? `nf_resize=smartcrop&w=${IMAGE_DIMENSIONS.PREVIEW.WIDTH}&h=${IMAGE_DIMENSIONS.PREVIEW.HEIGHT}` : `nf_resize=fit&h=${IMAGE_DIMENSIONS.FULL.MAX_HEIGHT}`

    return (
        <Box className={preview ? classes.dark : classes.light}>
            <ReactMarkdown
                transformImageUri={(imageName) => `/images/${containingFolder}/${id}/${imageName}?${imageQuery}`}
                source={onlyDescription ? description : content}
                renderers={{ image: imageRenderer, paragraph: paragraphRenderer, link: linkRenderer }} />
        </Box>
    )
}