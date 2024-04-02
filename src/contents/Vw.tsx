import styles from './Vw.module.scss'
import { useEffect, useRef, useState } from 'react'
const Vw = () => {
  const [windowWidth, setWindowWidth] = useState(document.body.clientWidth)
  const divRef = useRef(null)
  const [fontSize, setFontSize] = useState('')

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(document.body.clientWidth)
      if (divRef.current) {
        const computedStyle = window.getComputedStyle(divRef.current)
        const fontSizeValue = computedStyle.getPropertyValue('font-size')
        setFontSize(fontSizeValue)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles.pageDefault}>
      <h2>単位：vw</h2>
      .pageDefault = font-size:18px
      <div className={styles.componentDefault}>
        .componentDefault = font-size:20px
        <div className={styles.fontSizeContainer}>
          文字サイズ
          <div className={styles.divVwFontSize} ref={divRef}>
            divVwFontSize = font-size:1vw = {fontSize} abcgjkpABCこんな感じ
          </div>
          <div className={styles.divPxFontSize}>font-size:20px abcgjkpABCこんな感じ</div>
        </div>
        <hr />
        <div className={styles.widthContainer}>
          横幅
          <div className={styles.divVwWidth}>横幅：1vw</div>
          <div className={styles.divPxWidth}>横幅：20px</div>
        </div>
      </div>
      ブラウザ内の表示域(スクロールバーを除く):{windowWidth}
    </div>
  )
}
export default Vw
