import React from 'react'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import { ColorLinkInternal } from 'components/util/Link'
import { makeStyles, Theme } from '@material-ui/core'
import { SPACING, IMAGE_DIMENSIONS } from '../constants/Constants'
import { Item } from 'types/index'

const useStyles = makeStyles((theme: Theme) => ({
  image: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '95%'
  },
  para: {
    margin: theme.spacing(SPACING.SMALL)
  }
}))

export default () => {
  const { item, containingFolder }: { item: Item, containingFolder: string } = useRouteData()
  const classes = useStyles();

  const imageRenderer = (props: any) => {
    return <img className={classes.image} {...props} />
  }

  const paragraphRenderer = (props: any) => {
    return <p className={classes.para} {...props} />
  }

  return (
    <>
      <div>
        <ColorLinkInternal to={`/bits-and-bobs/${containingFolder}`}>{'<'} Back</ColorLinkInternal>
        <h1>
          {item.title}
        </h1>
        <ReactMarkdown
          transformImageUri={(imageName) => `/images/${containingFolder}/${item.id}/${imageName}?nf_resize=smartcrop&w=${IMAGE_DIMENSIONS.WIDTH}&h=${IMAGE_DIMENSIONS.HEIGHT}`}
          source={item.content}
          renderers={{ image: imageRenderer, paragraph: paragraphRenderer }} />
      </div>
    </>
  )
}
