import styles from './Percent.module.scss'
const Percent = () => {
  return (
    <div className={styles.pageDefault}>
      <h2>単位：%</h2>
      .pageDefault = font-size:18px
      <div className={styles.componentDefault}>
        .componentDefault = font-size:20px
        <div className={styles.fontSizeContainer}>
          文字サイズ
          <div className={styles.divPercentFontSize}>divPercentFontSize = font-size:50% abcgjkpABCこんな感じ</div>
          <div className={styles.divPxFontSize}>font-size:10px abcgjkpABCこんな感じ</div>
        </div>
        <hr />
        <div className={styles.widthContainer}>
          横幅
          <div className={styles.divPercentWidth}>横幅：50%</div>
          <div className={styles.divPxWidth}>横幅：20px</div>
        </div>
      </div>
    </div>
  )
}
export default Percent
