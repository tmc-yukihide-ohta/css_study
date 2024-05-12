import styles from './Px.module.scss'
import px from '../assets/images/px.png'

const Px = () => {
  return (
    <div className={styles.pageDefault}>
      <h3>px : 他要素のことを気にせずにピクセル数で大きさを指定</h3>
      .pageDefault = font-size:18px
      <div className={styles.componentDefault}>
        .componentDefault = font-size:20px
        <div className={styles.fontSizeContainer}>
          文字サイズ
          <div className={styles.divPxFontSize}>.divPxFontSize = font-size:24px</div>
          <div className={styles.divPxFontSize}>abcgjkpABCこんな感じ</div>
        </div>
        <hr />
        <div className={styles.widthContainer}>
          横幅
          <div className={styles.divPxWidth}>.divPxWidth = width:24px</div>
        </div>
      </div>
      <a href={px} target="_blank">
        <img src={px} alt="コード" width="600px" />
      </a>
    </div>
  )
}
export default Px
