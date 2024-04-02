import styles from './Rem.module.scss'
const Rem = () => {
  return (
    <div className={styles.pageDefault}>
      <h2>単位：rem</h2>
      .pageDefault = font-size:18px
      <div className={styles.componentDefault}>
        .componentDefault = font-size:20px
        <div className={styles.fontSizeContainer}>
          文字サイズ
          <div className={styles.divRemFontSize}>divRemFontSize = font-size:2rem abcgjkpABCこんな感じ</div>
          <div className={styles.divPxFontSize}>font-size:32px abcgjkpABCこんな感じ</div>
        </div>
        <hr />
        <div className={styles.widthContainer}>
          横幅
          <div className={styles.divRemWidth}>横幅：2rem</div>
          <div className={styles.divPxWidth}>横幅：32px</div>
        </div>
      </div>
    </div>
  )
}
export default Rem
