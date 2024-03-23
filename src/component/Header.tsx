import styles from './Header.module.scss'
const Header = () => {
  return (
    <div className={styles.headerComponent}>
      <header>headerコンポーネント内のheader要素</header>
      <div className={styles.title}>header内の.titleクラス</div>
    </div>
  )
}

export default Header
