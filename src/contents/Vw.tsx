import styles from './Vw.module.scss'
import { useEffect, useRef, useState } from 'react'
const Vw = () => {
  const [clickedFont, setClickedFont] = useState(false)
  const [clickedWidth, setClickedWidth] = useState(false)

  const handleClickFont = () => {
    setClickedFont(!clickedFont)
  }
  const handleClickWidth = () => {
    setClickedWidth(!clickedWidth)
  }

  const [windowWidth, setWindowWidth] = useState(document.body.clientWidth)
  const divRef = useRef(null)
  const [fontSize, setFontSize] = useState('')

  const divWidthRef = useRef(null)
  const [divWidthSize, setWidthSize] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(document.body.clientWidth)
      if (divRef.current) {
        const computedStyle = window.getComputedStyle(divRef.current)
        const fontSizeValue = computedStyle.getPropertyValue('font-size')
        setFontSize(fontSizeValue)
      }
      if (divWidthRef.current) {
        const computedStyle = window.getComputedStyle(divWidthRef.current)
        const widthValue = parseFloat(computedStyle.getPropertyValue('width'))
        setWidthSize(widthValue)
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
            divVwFontSize = font-size:1vw
          </div>
          <div className={styles.divPxFontSize} onClick={handleClickFont}>
            font-size:<span style={{ color: 'red' }}>{clickedFont ? fontSize : '??px'}</span> abcgjkpABCこんな感じ
          </div>
        </div>
        <hr />
        <div className={styles.widthContainer}>
          横幅
          <div className={styles.divVwWidth} ref={divWidthRef}>
            .divVwWidth = width: 1vw
          </div>
          <div className={styles.divPxWidth} onClick={handleClickWidth}>
            width: <span style={{ color: 'red' }}>{clickedWidth ? fontSize : '??px'}</span>
          </div>
        </div>
      </div>
      ブラウザ内の表示域(スクロールバーを除く):{windowWidth}
    </div>
  )
}
export default Vw
