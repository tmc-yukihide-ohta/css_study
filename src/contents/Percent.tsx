import styles from './Percent.module.scss'
const Percent = () => {
  return (
    <div className={styles.pageDefault}>
      <h2>単位：rem</h2>
      .pageDefault = 20px
      <div className={styles.componentDefault}>
        .componentDefault = 10px
        <div className={styles.divPercentFontSize}>文字：200% abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divPxFontSize}>文字：20px abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divPercentWidth}>横幅：200% abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
        <div className={styles.divPxWidth}>横幅：20px</div>
      </div>
    </div>
  )
}
export default Percent
