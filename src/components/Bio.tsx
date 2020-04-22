import React from 'react'
import Avatar from './Avatar'
import { Container, Typography } from '@material-ui/core'
import PaddedBox from './util/PaddedBox'
import { Link as ReachLink } from '@reach/router'
import ColorLink from './util/Link'

interface BioProps {
  name: string;
  imageSrc: string;
}

const Bio: React.FC<BioProps> = (props) => {

  return (

    <Container >
      <Typography align='center' component='span'>
        <PaddedBox size='large'>
          <ReachLink to='/'>
            <Avatar altText={props.name} src={props.imageSrc} />
          </ReachLink>
          <PaddedBox size='large'>
            <Typography variant='h4'>{props.name}</Typography>
          </PaddedBox>
          <Typography variant='body1'>Hi! I'm a software engineer working at <ColorLink to='https://www.dunnhumby.com/'>dunnhumby</ColorLink>. Currently experimenting with little projects in Unity.</Typography>
        </PaddedBox>
      </Typography>
    </Container>
  )
}
export default Bio
