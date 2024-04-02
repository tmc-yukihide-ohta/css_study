import styles from './Em.module.scss'
import { useState } from 'react'
const Em = () => {
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
      <h2>単位：em</h2>
      .pageDefault = font-size:18px
      <div className={styles.componentDefault}>
        .componentDefault = font-size:20px
        <div className={styles.fontSizeContainer}>
          文字サイズ
          <div className={styles.divEmFontSize}>.divEmFontSize = font-size:2em</div>
          <div className={styles.divPxFontSize} onClick={handleClickFont}>
            font-size:<span style={{ color: 'red' }}>{clickedFont ? '40px' : '??px'}</span> abcgjkpABCこんな感じ
          </div>
        </div>
        <hr />
        <div className={styles.widthContainer}>
          横幅
          <div className={styles.divEmWidth}>.divEmWidth = width: 2em</div>
          <div className={styles.divPxWidth} onClick={handleClickWidth}>
            width: <span style={{ color: 'red' }}>{clickedWidth ? '40px' : '??px'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Em
