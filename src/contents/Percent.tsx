import styles from './Percent.module.scss'
import { useEffect, useRef, useState } from 'react'
import percent from '../assets/images/percent.png'

const Percent = () => {
  const [clickedFont, setClickedFont] = useState(false)
  const [clickedWidth, setClickedWidth] = useState(false)

  const divRef = useRef(null)
  const [divWidthSize, setWidthSize] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const computedStyle = window.getComputedStyle(divRef.current)
        const widthValue = parseFloat(computedStyle.getPropertyValue('width')) * 0.5
        setWidthSize(widthValue)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const handleClickFont = () => {
    setClickedFont(!clickedFont)
  }
  const handleClickWidth = () => {
    setClickedWidth(!clickedWidth)
  }
  return (
    <div className={styles.pageDefault}>
      <h3>% : 親要素の大きさに対する割合で指定</h3>
      .pageDefault = font-size:18px
      <div className={styles.componentDefault}>
        .componentDefault = font-size:20px
        <div className={styles.fontSizeContainer}>
          文字サイズ
          <div className={styles.divPercentFontSize}>divPercentFontSize = font-size:50%</div>
          <div className={styles.divPxFontSize} onClick={handleClickFont}>
            font-size:<span style={{ color: 'red' }}>{clickedFont ? '10px' : '??px'}</span> abcgjkpABCこんな感じ
          </div>
        </div>
        <hr />
        <div className={styles.widthContainer} ref={divRef}>
          横幅
          <div className={styles.divPercentWidth}>.divPercentWidth = width: 50%</div>
          <div className={styles.divPxWidth} onClick={handleClickWidth}>
            width: <span style={{ color: 'red' }}>{clickedWidth ? divWidthSize + 'px' : '??px'}</span>
          </div>
        </div>
      </div>
      横幅のdivのwidth={divWidthSize * 2}px
      <a href={percent} target="_blank">
        <img src={percent} width="600px" alt="コード" />
      </a>
    </div>
  )
}
export default Percent
