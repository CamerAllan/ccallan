import React from 'react'
import { useRouteData } from 'react-static'
import { ColorLinkInternal } from 'components/util/Link'
import { Item } from 'types/index'
import ItemContent from './ItemContent'


export default () => {
  const { item, containingFolder }: { item: Item, containingFolder: string } = useRouteData()

  return (
    <>
      <div>
        <ColorLinkInternal to={`/bits-and-bobs/${containingFolder}`}>{'<'} Back</ColorLinkInternal>
        <h1>
          {item.title}
        </h1>
        <ItemContent item={item} containingFolder={containingFolder} />
      </div>
    </>
  )
}
