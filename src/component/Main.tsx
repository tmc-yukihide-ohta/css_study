import styles from './Main.module.scss'
import Overview from '../contents/Overview.tsx'
import Px from '../contents/Px.tsx'
import Em from '../contents/Em.tsx'
import Rem from '../contents/Rem.tsx'
import Percent from '../contents/Percent.tsx'
import Vw from '../contents/Vw.tsx'
import Vh from '../contents/Vh.tsx'
import FontSize from '../contents/FontSize.tsx'

interface MainProps {
  selectedComponent: string
}

const Main: React.FC<MainProps> = ({ selectedComponent }) => {
  const renderContent = () => {
    switch (selectedComponent) {
      case 'overView':
        return <Overview />
      case 'fontSize':
        return <FontSize />
      case 'px':
        return <Px />
      case 'em':
        return <Em />
      case 'rem':
        return <Rem />
      case 'percent':
        return <Percent />
      case 'vw':
        return <Vw />
      case 'vh':
        return <Vh />
      default:
        return <Overview />
    }
  }

  return <div className={styles.mainComponent}>{renderContent()}</div>
}

export default Main
