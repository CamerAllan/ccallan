import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import ReactMarkdown from 'react-markdown'

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
        <Link to="/blog/">{'<'} Back</Link>
        <ReactMarkdown source={post.content}/>
      </div>
    </>
  )
}
