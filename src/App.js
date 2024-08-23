import React from 'react'

import { ContextAPI } from './contextAPI/ContextAPI'
import Display from './contextAPI/Display'
import MouseHoverEffect from './mouseHover/MouseHoverEffect'
import ChamberMainsesstion from './chambers/ChamberMainsesstion'
import SingleProductChamber from './chambers/singleCahmber/SingleProductChamber'

const App = () => {
  return (
    <div>
      <ContextAPI>
<Display  />
<MouseHoverEffect />
<ChamberMainsesstion />
<SingleProductChamber />

      </ContextAPI>
    </div>
  )
}

export default App