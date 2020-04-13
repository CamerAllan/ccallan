import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { createGenerateClassName } from '@material-ui/core/styles'
import React from 'react'

const generateClassName = createGenerateClassName()

const blogPath = 'public/content/posts/';

const wordCount = (content) => {
    return (content.split(" ").length - 1)
}

const getPosts = () => {
  const posts = []
  
  fs.readdirSync(blogPath).forEach(file => {
    // Get contents of markdown file
    const contents = fs.readFileSync(blogPath + file, 'utf8')
    // Parse markdown content + front-matter
    const post = matter(contents)
    // Replace date with unix timestamp
    post.data.date = Date.parse(post.data.date)
    // Set word count
    post.data.wordCount = wordCount(post.content)
    posts.push(post);
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
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  Document: class CustomHtml extends React.Component {
    render() {
      const { Html, Head, Body, children } = this.props
      return (
        <Html lang="de">
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Cameron Allan</title>
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
  plugins: [
    [
      'react-static-plugin-jss',
      {
        providerProps: {
          generateClassName,
        },
      }
    ],
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
