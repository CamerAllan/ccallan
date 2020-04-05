import axios from 'axios'
import path from 'path'
import { createGenerateClassName } from '@material-ui/core/styles'
// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

const generateClassName = createGenerateClassName()

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const { data: posts } /* :{ data: Post[] } */ = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map((post /* : Post */) => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
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
  beforeRenderToElement: (App, { meta }) => props => {
        const generateClassName = createGenerateClassName();
        // Create a sheetsRegistry instance.
        meta.jssSheetsRegistry = new SheetsRegistry();
        // fresh sheet manager
        props.sheetsManager = new Map();
        props.theme = createMuiTheme(providerProps.muiTheme);
        return (
            <JssProvider generateClassName={ generateClassName } registry={ meta.jssSheetsRegistry }>
                <App { ...props } />
            </JssProvider>
        );
    },
    Head: ({ meta }) => {
        return <React.Fragment>
            <style id="jss-server-side" dangerouslySetInnerHTML={{ __html: meta.jssSheetsRegistry.toString() }}/>
        </React.Fragment>
    },
}
