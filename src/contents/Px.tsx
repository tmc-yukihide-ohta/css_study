import styles from './Px.module.scss'
const Px = () => {
  return (
    <div className={styles.pageDefault}>
      <h2>単位：px</h2>
      .pageDefault = 20px
      <div className={styles.componentDefault}>
        .componentDefault = 10px
        <h3>文字サイズ</h3>
        <div className={styles.divPxFontSize}>文字：32px abcgjkpABCGJKP</div>
        <h3>横幅</h3>
        <div className={styles.divPxWidth}>32px abcgjkpABCGJKP</div>
      </div>
    </div>
  )
}
export default Px
