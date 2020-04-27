import React from 'react';
import ReactMarkdown from "react-markdown";
import { Item } from "types/index";
import { makeStyles, Theme, Box } from '@material-ui/core'
import { SPACING, IMAGE_DIMENSIONS } from '../constants/Constants'
import { ColorLinkExternal } from './util/Link';

const useStyles = (preview: boolean) => makeStyles((theme: Theme) => ({
    image: {
        display: 'block',
        margin: '0 auto',
        maxWidth: '95%',
        border: `0.4rem solid ${theme.palette.primary.main}`
    },
    imagePlaceholder: {
        width: preview ? IMAGE_DIMENSIONS.PREVIEW.WIDTH : IMAGE_DIMENSIONS.FULL.WIDTH,
        height: preview ? IMAGE_DIMENSIONS.PREVIEW.HEIGHT : IMAGE_DIMENSIONS.FULL.HEIGHT,
        backgroundColor: 'primary'
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
            <React.Suspense fallback={<Box className={classes.imagePlaceholder}></Box>}>
                <img className={classes.image} {...props} />
            </React.Suspense>
        )
    }

    const paragraphRenderer = (props: any) => {
        return <p className={classes.para} {...props} />
    }

    const dimensions = preview ? IMAGE_DIMENSIONS.PREVIEW : IMAGE_DIMENSIONS.FULL;

    return (
        <Box className={preview ? classes.dark : classes.light}>
            <ReactMarkdown
                transformImageUri={(imageName) => `/images/${containingFolder}/${id}/${imageName}?nf_resize=smartcrop&w=${dimensions.WIDTH}&h=${dimensions.HEIGHT}`}
                source={onlyDescription ? description : content}
                renderers={{ image: imageRenderer, paragraph: paragraphRenderer, link: linkRenderer }} />
        </Box>
    )
}