import React from 'react'
import ReactDOM from 'react-dom/client'
import BackBG from './components/form/form'
import './style.css'
import Box from './components/elements/box'
import {one, two, three, four, five, six} from './components/elements/StyleBoxes/mainBox.module.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackBG />
    <Box classBox={one} />
    <Box classBox={two} />
    <Box classBox={three} />
    <Box classBox={four} />
    <Box classBox={five} />
    <Box classBox={six} />
  </React.StrictMode>
)
