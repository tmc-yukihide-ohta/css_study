import styles from './Main.module.scss'
import Aside from "./Aside.tsx";
import Compare from "./Compare.tsx";

interface MainProps {
  selectedComponent: string;
}

const Main:React.FC<MainProps> = ({ selectedComponent }) => {
  const renderContent = () => {
    switch (selectedComponent) {
      case '001':
        return <Aside/>;
      case '002':
        return <Compare/>;
      // ... 他のコンポーネントに対する処理を追加
      default:
        return <div>選択されたコンポーネントが存在しません</div>;
    }
  }

  return (
    <div className={styles.mainComponent}>
      <h2>main要素のh2要素</h2>
      {renderContent()}
    </div>
  )
}

export default Main