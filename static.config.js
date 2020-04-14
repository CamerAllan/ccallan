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

            {/* Favicon business */}
            <link rel="apple-touch-icon" sizes="57x57" href="/public/favicon/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/public/favicon/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/public/favicon/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/public/favicon/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/public/favicon/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/public/favicon/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/public/favicon/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/public/favicon/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/public/favicon/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192"  href="/public/favicon/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/public/favicon/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/manifest.json"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>

            <meta name="theme-color" content='#031926' />
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
