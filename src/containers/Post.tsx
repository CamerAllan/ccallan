import React from 'react'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import ColorLink from 'components/util/Link'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  image: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '95%'
  }
}))

export default () => {
  const { post }: { post: any } = useRouteData()
  const classes = useStyles();

  const imageRenderer = (props: any) => {
    return <img className={classes.image} {...props} />
  }

  return (
    <>
      <div>
        <ColorLink to="/blog/">{'<'} Back</ColorLink>
        <h1>
          {post.data.title}
        </h1>
        <ReactMarkdown 
          transformImageUri={(imageName) => `/images/posts/${post.data.id}/${imageName}`} 
          source={post.content} 
          renderers={{image: imageRenderer}}/>
      </div>
    </>
  )
}
