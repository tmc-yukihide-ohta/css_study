import './App.scss'
import Header from './component/Header.tsx'
import Main from './component/Main.tsx'
import Aside from './component/Aside.tsx'
import Footer from './component/Footer.tsx'
import Nav from './component/Nav.tsx'
import { useState } from 'react'
function App() {
  const [selectedComponent, setSelectedComponent] = useState<string>('')
  const handleComponentSelect = (componentId: string) => {
    setSelectedComponent(componentId)
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main selectedComponent={selectedComponent} />
      </main>
      <nav>
        <Nav onComponentSelect={handleComponentSelect} />
      </nav>
      <aside>
        <Aside />
      </aside>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
