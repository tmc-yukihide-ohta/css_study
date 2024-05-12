import styles from './Vh.module.scss'
import { useEffect, useRef, useState } from 'react'
import vh from '../assets/images/vh.png'

const Vh = () => {
  const [clickedFont, setClickedFont] = useState(false)
  // const [clickedWidth, setClickedWidth] = useState(false)
  const [clickedHeight, setClickedHeight] = useState(false)

  const handleClickFont = () => {
    setClickedFont(!clickedFont)
  }
  // const handleClickWidth = () => {
  //   setClickedWidth(!clickedWidth)
  // }
  const handleClickHeight = () => {
    setClickedHeight(!clickedHeight)
  }

  const [windowHeight, setWindowHeight] = useState(document.body.clientHeight)
  const divRef = useRef(null)
  const [fontSize, setFontSize] = useState('')

  // const divWidthRef = useRef(null)
  // const [divWidthSize, setDivWidthSize] = useState('')

  const divHeightRef = useRef(null)
  const [divHeightSize, setDivHeightSize] = useState('')

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(document.body.clientHeight)
      if (divRef.current) {
        const computedStyle = window.getComputedStyle(divRef.current)
        const fontSizeValue = computedStyle.getPropertyValue('font-size')
        setFontSize(fontSizeValue)
      }
      // if (divWidthRef.current) {
      //   const computedStyle = window.getComputedStyle(divWidthRef.current)
      //   const widthValue = computedStyle.getPropertyValue('width')
      //   setDivWidthSize(widthValue)
      // }
      if (divHeightRef.current) {
        const computedStyle = window.getComputedStyle(divHeightRef.current)
        const heightValue = computedStyle.getPropertyValue('height')
        setDivHeightSize(heightValue)
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
      <h3>vh : ブラウザの画面サイズを基準とした高さを指定</h3>
      .pageDefault = font-size:18px
      <div className={styles.componentDefault}>
        .componentDefault = font-size:20px
        <div className={styles.fontSizeContainer}>
          文字サイズ
          <div className={styles.divVhFontSize} ref={divRef}>
            divVwFontSize = font-size:2vh
          </div>
          <div className={styles.divPxFontSize} onClick={handleClickFont}>
            font-size:<span style={{ color: 'red' }}>{clickedFont ? fontSize : '??px'}</span> abcgjkpABCこんな感じ
          </div>
        </div>
        <hr />
        <div className={styles.heightContainer}>
          高さ
          <div className={styles.divPxHeight} onClick={handleClickHeight} ref={divHeightRef}>
            .divVhHeight = height: 50vh
            <br />
            height: <span style={{ color: 'red' }}>{clickedHeight ? divHeightSize : '??px'}</span>
          </div>
        </div>
      </div>
      ブラウザ内の表示域(スクロールバーを除く):{windowHeight}
      <a href={vh} target="_blank">
        <img src={vh} width="600px" alt="コード" />
      </a>
    </div>
  )
}
export default Vh
