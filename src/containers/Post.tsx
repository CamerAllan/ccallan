import React from 'react'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import ColorLink from 'components/util/Link'

export default () => {
  const { post }: { post: any } = useRouteData()
  return (
    <>
      <div>
        <ColorLink to="/blog/">{'<'} Back</ColorLink>
        <h1>
          {post.data.title}
        </h1>
        <ReactMarkdown source={post.content}/>
      </div>
    </>
  )
}
