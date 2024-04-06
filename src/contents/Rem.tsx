import styles from './Rem.module.scss'
import { useState } from 'react'
const Rem = () => {
  const [clickedFont, setClickedFont] = useState(false)
  const [clickedWidth, setClickedWidth] = useState(false)

  const handleClickFont = () => {
    setClickedFont(!clickedFont)
  }
  const handleClickWidth = () => {
    setClickedWidth(!clickedWidth)
  }

  return (
    <div className={styles.pageDefault}>
      <h3>rem : html要素に指定されたフォントサイズを1としてその比率を指定</h3>
      .pageDefault = font-size:18px
      <div className={styles.componentDefault}>
        .componentDefault = font-size:20px
        <div className={styles.fontSizeContainer}>
          文字サイズ
          <div className={styles.divRemFontSize}>divRemFontSize = font-size:2rem</div>
          <div className={styles.divPxFontSize} onClick={handleClickFont}>
            font-size:<span style={{ color: 'red' }}>{clickedFont ? '32px' : '??px'}</span> abcgjkpABCこんな感じ
          </div>
        </div>
        <hr />
        <div className={styles.widthContainer}>
          横幅
          <div className={styles.divRemWidth}>.divRemWidth = width: 2rem</div>
          <div className={styles.divPxWidth} onClick={handleClickWidth}>
            width: <span style={{ color: 'red' }}>{clickedWidth ? '32px' : '??px'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Rem
