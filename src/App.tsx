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

  console.log(1)

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="container">
        <nav>
          <Nav onComponentSelect={handleComponentSelect} />
        </nav>
        <aside>
          <Aside />
        </aside>
      </div>
      <main>
        <Main selectedComponent={selectedComponent} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
