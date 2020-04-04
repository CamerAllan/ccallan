import React from 'react'
import { Avatar as Image } from '@material-ui/core';

interface BioProbs {
    altText: string;
    src: string;
}

const Bio: React.FC<BioProbs> = (props) => {
  return (
    <div>
        <Image alt={props.altText} src={props.src} variant='circle'/>
    </div>
  )
}
export default Bio
