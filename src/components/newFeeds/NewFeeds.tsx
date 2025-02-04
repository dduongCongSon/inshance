import { colors } from '@mui/material'
import React from 'react'
import "./NewFeeds.css"
import Stories from './story/Stories'
import Status from './status/Status'

const NewFeeds = () => {
  return (
    <div>
      <div><Stories /></div>
      <div><Status /></div>

    </div>
  )
}

export default NewFeeds