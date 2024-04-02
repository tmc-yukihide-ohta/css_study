import styles from './Px.module.scss'
const Px = () => {
  return (
    <div className={styles.pageDefault}>
      <h2>単位：px</h2>
      .pageDefault = font-size:18px
      <div className={styles.componentDefault}>
        .componentDefault = font-size:20px
        <div className={styles.fontSizeContainer}>
          文字サイズ
          <div className={styles.divPxFontSize}>.divPxFontSize = font-size:24px abcgjkpABCこんな感じ</div>
        </div>
        <hr />
        <div className={styles.widthContainer}>
          横幅
          <div className={styles.divPxWidth}>.divPxWidth = width:24px</div>
        </div>
      </div>
    </div>
  )
}
export default Px
