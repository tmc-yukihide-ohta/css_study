import './app.scss'
import Header from './component/Header.tsx'
import Main from './component/Main.tsx'
import Aside from './component/Aside.tsx'
import Footer from './component/Footer.tsx'
function App() {
  return (
    <>
      <header>
        Appのheaderタグ内要素
        <Header />
      </header>
      <main>
        Appのmainタグ内要素
        <Main />
      </main>
      <aside>
        Appのasideタグ内要素
        <Aside />
      </aside>
      <footer>
        Appのfooterタグ内要素
        <Footer />
      </footer>
    </>
  )
}

export default App
