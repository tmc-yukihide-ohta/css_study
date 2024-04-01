import styles from './Vw.module.scss'
import {useEffect, useRef, useState} from "react";
const Vw = () => {
  const [windowWidth, setWindowWidth] = useState(document.body.clientWidth)
  const divRef = useRef(null);
  const [fontSize, setFontSize] = useState('');

  useEffect(()=>{
    const handleResize =()=>{
      setWindowWidth(document.body.clientWidth)
      if (divRef.current) {
        const computedStyle = window.getComputedStyle(divRef.current);
        const fontSizeValue = computedStyle.getPropertyValue('font-size');
        setFontSize(fontSizeValue);
      }
    }
    window.addEventListener('resize',handleResize)
    return ()=>{
      window.removeEventListener('resize', handleResize)
    }
  },[])


  return (
    <div className={styles.pageDefault}>
      <h2>単位：vw</h2>
      .pageDefault = 20px
      <div className={styles.componentDefault}>
        .componentDefault = 10px
        <div className={styles.divVwFontSize} ref={divRef}>文字：1vw {fontSize} abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divPxFontSize}>文字：20px abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divVwWidth}>横幅：200% abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divPxWidth}>横幅：20px</div>
      </div>
      ブラウザ内の表示域(スクロールバーを除く):{windowWidth}
    </div>
  )
}
export default Vw
