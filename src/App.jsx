import gsap from "gsap"
import { Draggable } from "gsap/Draggable"

import { NavBar, Welcome, Dock } from "#components"
import { Terminal, Safari, Resume, Finder, Text } from "#windows"

gsap.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
    </main>
  )
}

export default App