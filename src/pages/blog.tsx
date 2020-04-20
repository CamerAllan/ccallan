import React from 'react'
import { useRouteData } from 'react-static'
import { PostData } from 'types'
import PostCard from 'components/PostCard'
import PaddedBox from 'components/util/PaddedBox'
import { Divider, Box } from '@material-ui/core'

export default () => {
  const { posts }: { posts: PostData[] } = useRouteData()

  // Sort posts by date
  posts.sort((a, b) => b.date - a.date)

  return (
    <div>
      <h1>Posts</h1>
      <Divider />
      {posts.map(postData => (
        !postData.live ? null :
          <Box>
            <PaddedBox>
              <PostCard postData={postData} />
            </PaddedBox>
            <Divider />
          </Box>
      ))}
    </div>
  )
}
