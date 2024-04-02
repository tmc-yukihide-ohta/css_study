import styles from './Em.module.scss'
const Em = () => {
  return (
    <div className={styles.pageDefault}>
      <h2>単位：em</h2>
      .pageDefault = font-size:18px
      <div className={styles.componentDefault}>
        .componentDefault = font-size:20px
        <div className={styles.fontSizeContainer}>
          文字サイズ
          <div className={styles.divEmFontSize}>.divEmFontSize = font-size:2em abcgjkpABCこんな感じ</div>
          <div className={styles.divPxFontSize}>font-size:40px abcgjkpABCこんな感じ</div>
        </div>
        <hr />
        <div className={styles.widthContainer}>
          横幅
          <div className={styles.divEmWidth}>横幅：2em</div>
          <div className={styles.divPxWidth}>横幅：40px</div>
        </div>
      </div>
    </div>
  )
}
export default Em
