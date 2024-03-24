import './app.scss'
import Header from './component/Header.tsx'
import Main from './component/Main.tsx'
import Aside from './component/Aside.tsx'
import Footer from './component/Footer.tsx'
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
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
