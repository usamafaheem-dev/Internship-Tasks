import React from 'react'
import Heading from './Heading'
import { LevelContext } from '../ContextApi/Context'

const Section = ({level, children}) => {
  return (
    <div>
      <LevelContext value={level+1}>

      {children}
      </LevelContext>
    </div>
  )
}

export default Section
