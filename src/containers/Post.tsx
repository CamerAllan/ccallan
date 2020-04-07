import React from 'react'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import ColorLink from 'components/util/Link'

export default () => {
  const { post }: { post: any } = useRouteData()
  return (
    <>
      <h1>
        {post.title}
      </h1>
      <h2>
        {post.date}
      </h2>
      <div>
        <ColorLink to="/blog/">{'<'} Back</ColorLink>
        <ReactMarkdown source={post.content}/>
      </div>
    </>
  )
}
