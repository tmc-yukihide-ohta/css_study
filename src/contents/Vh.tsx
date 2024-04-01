import styles from './Vh.module.scss'
import { useEffect, useRef, useState } from 'react'
const Vh = () => {
  const [windowHeight, setWindowHeight] = useState(document.body.clientHeight)
  const divRef = useRef(null)
  const [fontSize, setFontSize] = useState('')

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(document.body.clientHeight)
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
      <h2>単位：vh</h2>
      .pageDefault = 20px
      <div className={styles.componentDefault}>
        .componentDefault = 10px
        <div className={styles.divVhFontSize} ref={divRef}>
          文字：1vh {fontSize} abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
        </div>
        <div className={styles.divPxFontSize}>文字：20px abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divVhWidth}>横幅：1vh abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divPxWidth}>横幅：20px</div>
      </div>
      ブラウザ内の表示域(スクロールバーを除く):{windowHeight}
    </div>
  )
}
export default Vh
