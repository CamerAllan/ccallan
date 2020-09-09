import React, { ReactNode } from 'react'
import Head from 'next/head'
import LayoutContent from './LayoutContent'
import { Box } from '@chakra-ui/core'

type Props = {
  children?: ReactNode
  title: string
}

const Layout = (props: Props) => (
  <Box bg='white' height='100vh'>
    <Head>
      <title>{`${props.title} | Cameron Allan`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <LayoutContent title={props.title} children={props.children} />
  </Box>
)

export default Layout
