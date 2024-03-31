import styles from './Main.module.scss'
import Overview from '../contents/Overview.tsx'
import Px from '../contents/Px.tsx'
import Em from '../contents/Em.tsx'
import Rem from '../contents/Rem.tsx'

interface MainProps {
  selectedComponent: string
}

const Main: React.FC<MainProps> = ({ selectedComponent }) => {
  const renderContent = () => {
    switch (selectedComponent) {
      case 'overView':
        return <Overview />
      case 'px':
        return <Px />
      case 'em':
        return <Em />
      case 'rem':
        return <Rem />
      // ... 他のコンポーネントに対する処理を追加
      default:
        return <Overview />
    }
  }

  return <div className={styles.mainComponent}>{renderContent()}</div>
}

export default Main
