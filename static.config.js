import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

const blogPath = 'public/content/posts/';

const getPosts = () => {
  const posts = []
  
  fs.readdirSync(blogPath).forEach(file => {
    const contents = fs.readFileSync(blogPath + file, 'utf8');
    posts.push(matter(contents));
  });
  return posts;
}

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const posts = getPosts()
    return [
      {
        path: '/blog',
        getData: () => ({
          posts: posts.map(post => post.data),
        }),
        children: posts.map((post) => ({
          path: `/post/${post.data.id}`,
          template: 'src/components/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
