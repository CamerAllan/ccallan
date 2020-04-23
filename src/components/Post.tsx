import React from 'react'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import ColorLink from 'components/util/Link'
import { makeStyles, Theme } from '@material-ui/core'
import { SPACING } from '../constants/Constants'

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
  const { post }: { post: any } = useRouteData()
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
        <ColorLink to="/blog/">{'<'} Back</ColorLink>
        <h1>
          {post.data.title}
        </h1>
        <ReactMarkdown
          transformImageUri={(imageName) => `/images/posts/${post.data.id}/${imageName}?nf_resize=fit&w=960&h=540`}
          source={post.content}
          renderers={{ image: imageRenderer, paragraph: paragraphRenderer }} />
      </div>
    </>
  )
}
