// Do not put all code in App.jsx
// containers example: image, single image, ui buttons
// Start with wireframe: build react App UI first, then start coding.


import { useState } from 'react'
import './App.css'

function App() {
  // state
  // variable to store API image data
  // variable to store current image

  // effects
  // fetch data from API
  // https://api.thecatapi.com/v1/images/search?limit=10
  // put it in state

  // functions event handlers
  // when user clicks image
  // when a user presses a button that switches image left/right
  return (
    <>
      <h1>Gallery</h1>
      <div>thubmnail container showing all image using .map with key</div>
      <div>big image container</div>
    </>
  )
}

export default App
