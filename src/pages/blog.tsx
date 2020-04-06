import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { PostData } from 'types'

export default () => {
  const { posts }: { posts: PostData[] } = useRouteData()

  return (
    <div>
      <h1>Blog</h1>
      <br />
      All Posts:
      <ul>
        {posts.map(postData => (
          <li key={postData.id}>
            <Link to={`/blog/post/${postData.id}/`}>{postData.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
